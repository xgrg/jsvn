import json
from preamble import *

def clean_line(line):
    ''' removes any space and convert to lowercase'''
    return ''.join(line.split(' ')).lower().rstrip('\n')


def beautify_table(d):
    ''' From a dictionary to a Markdown table'''
    res = tabulate.tabulate(d.items(), ['variable', 'value'], tablefmt="pipe")
    return res


def regenerate_md(preamble, j):
    ''' From a JSON regenerates a Markdown file'''
    # first copy preamble
    md = 'Version: %s\n'%preamble['version']
    md = md + 'Qualities:\n'
    t = beautify_table(preamble['qualities'])
    md = md + t + '\n'

    # then appends scenes
    for k, v in j.items():
        md = md + '# %s\n'%k
        md = md + '## Qualities\n'
        if '@function' in v['Qualities']:
            qual_d, qual_f = v['Qualities'].split('@function')
        else:
             qual_d, qual_f = v['Qualities'], ''
        d = parse_dict(qual_d)
        if d != {}:
            md = md + beautify_table(d) +'\n'
        if qual_f != '':
            md = md + '\n@function' + qual_f + '\n'

        for each in ['Image', 'Text']:
            if each in v.keys():
                md = md + '## %s\n%s\n'%(each, v[each])

        md = md + '## Choices\n'
        for k1, v1 in v['Choices'].items():
            md = md + '### %s\n'%k1
            if '@if' in v1:
                qual_d, qual_f = v1.split('@if')
            else:
                qual_d, qual_f = v1, ''
            d = parse_dict(qual_d)
            md = md + beautify_table(d) + '\n'
            if qual_f != '':
                md = md + '\n@if' + qual_f + '\n'

        # if section is choice or qualities
        # then check for tables

        # adds a breaking line
        md = md + '\n---------------------------------\n'

    w = open('/tmp/vallter.md2','w')
    w.write(md)
    w.close()
    return md

def clean_json(j):

    log.info('* Cleaning JSON.')
    from collections import OrderedDict
    res = OrderedDict()
    # then appends scenes
    for k, v in j.items():
        sc = {}
        if '@function' in v['Qualities']:
            qual_d, qual_f = v['Qualities'].split('@function')
        else:
             qual_d, qual_f = v['Qualities'], ''
        d = parse_dict(qual_d)
        qual_dict = dict(d)

        if qual_f != '':
            qual_dict['@function'] = qual_f
        sc['Qualities'] = qual_dict

        for each in ['Image', 'Text']:
            if each in v.keys():
                sc[each] = v[each]

        ch = OrderedDict()
        for k1, v1 in v['Choices'].items():
            if '@if' in v1:
                qual_d, qual_f = v1.split('@if')
            else:
                qual_d, qual_f = v1, ''

            d = parse_dict(qual_d)
            choice_dict = dict(d)
            #d2 = ['%s:%s'%(k2,v2) for k2, v2 in d.items()]
            #ch[k1] = '\n'.join(d2) + '\n'
            if qual_f != '':
                choice_dict['@if'] = qual_f
                #ch[k1] = ch[k1] + '\n@if\n' + qual_f
            ch[k1] = choice_dict
        sc['Choices'] = ch
        res[k] = sc
    return res

def get_qualities_code(code):
    f = []
    res = ''
    varname = 'a'

    for k, v in code.items():
        f.append('a%s'%(len(f)+1))
        if k == '@function':
            if_func = code['@function'].replace('function', 'function %s'%f[-1])
            res = res + if_func +';\n'
        else:
            res =  res + 'function %s(){ return (vartable["%s"]=="%s"); };'%(f[-1], k, v)

    res = '\n%s'%res
    c = ' && '.join(['%s()'%e for e in f])
    res = res + 'return (%s);\n'%c

    return res

def get_playsequence(code):
    seq = ''
    for each in code.split('\n'):

        each = markdown.markdown(each)
        eachcode = '{addDialog("%s", "fadeIn")}, 1000'%each
        seq = seq + '    [function()%s],\n'%(eachcode)
    return seq

def get_storylet_code(code):
    storylet_code = '  playSequence([%s%s%s    [choice, 0]])'%("%s", get_playsequence(code), "%s")
    return storylet_code

def get_choice(code):
    res = ''
    for label, option in code.items():
        # k is the text of the choice, v is the assigned code
        if_func = ''

        if '@if' in option.keys():
            if_func = ', ' + option['@if']
            option.pop('@if')

        res = res + '["%s", %s%s],'%(label, json.dumps(option), if_func)

    return 'choices:[%s]'%res

def remove_minuslines(md_fp):
    ''' Creates a new file with same content minus lines full of ------'''
    log.info('* Removing minus lines.')
    log.info('Reading: %s'%md_fp)
    lines = open(md_fp).readlines()
    w = open(md_fp+'1', 'w')
    for each in lines:
        is_line = False
        clean = clean_line(each)
        if len(set(clean)) == 1:
            for s in ['---', '***', '###']:
                if clean.startswith(s):
                    is_line = True
                    break
        if not is_line:
            w.write(each)
    w.close()
    log.info('Written: %s'%md_fp+'1')



def json_to_javascript(j):
    js = ''
    for sc_name, sc in j.items():
        qual_code = get_qualities_code(sc['Qualities'])
        storylet_code = get_storylet_code(sc['Text'])

        image = '' if not 'Image' in sc.keys() else '[function(){displayImage("%s")}, 1000],\n'%sc['Image']
        extra_code = '' if not 'Code' in sc.keys() else '   [function(){%s}, 0],\n'%sc['Code']
        choices_code = '' if not 'Choices' in sc.keys() else get_choice(sc['Choices'])
        sc_code = '  qualities:function(){\n    %s\n  },\n'\
            '  storylet:function(choice){\n%s\n  },\n%s'\
            %(qual_code, storylet_code%(image, extra_code), choices_code)
        scene_js = '%s = {\n%s\n}'%(sc_name, sc_code)
        js = js + scene_js + '\n\n'


    pushlist = ''
    for sc_name, _ in j.items():
        pushlist = pushlist + '  storylets.push(%s);\n'%sc_name
    js = js + '$(document).ready(function(){\n%s});'%pushlist

    return js

def jsonify_markdown(md_fp):
    import sys
    reload(sys)
    sys.setdefaultencoding('utf-8')

    import markdown_to_json
    from markdown_to_json.vendor.docopt import docopt
    from markdown_to_json.vendor import CommonMark

    from markdown_to_json.markdown_to_json import Renderer, CMarkASTNester

    def get_markdown_ast(markdown_file):
        try:
            f = open(markdown_file, 'r')
            return CommonMark.DocParser().parse(f.read())
        except:
            log.error("Error: Can't open {0} for reading".format(
                markdown_file))
            sys.exit(1)
        finally:
            f.close()

    def jsonify_markdown(markdown_file):
        nester = CMarkASTNester()
        renderer = Renderer()
        ast = get_markdown_ast(markdown_file)
        nested = nester.nest(ast)
        rendered = renderer.stringify_dict(nested)
        return rendered


    log.info('* Jsonifying %s'%md_fp)
    res = jsonify_markdown(md_fp)
    return res
