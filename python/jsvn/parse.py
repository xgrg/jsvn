from preamble import *

def regenerate_md(preamble, j):
    ''' From a JSON regenerates a Markdown file'''

    def beautify_table(d):
        ''' From a dictionary to a Markdown table'''
        res = tabulate.tabulate(d.items(), ['variable', 'value'], tablefmt="pipe")
        return res

    # first copy preamble
    log.info(preamble)
    md = ''
    if not preamble['version'] is None:
        md = md + 'Version: %s\n\n'%preamble['version']
        md = md + 'Qualities:\n\n'
    if not preamble['qualities'] is None:
        t = beautify_table(preamble['qualities'])
        md = md + t + '\n\n'
    if not preamble['extensions'] is None:
        md = md + 'Extensions:%s\n\n'%','.join(preamble['extensions'])

    # then appends scenes
    for k, v in j.items():
        md = md + '# %s\n'%k
        md = md + '## Qualities\n'

        d = v['Qualities']
        qual_f = ''
        if 'Choix' in k:
            log.info('########')
            log.info(d)
        if '@function' in d.keys():
            qual_f = d['@function']
            d.pop('@function')
            log.info(qual_f)
        if d != {}:
            md = md + beautify_table(d) +'\n\n'
        if qual_f != '':
            md = md + '@function' + qual_f + '\n\n'

        for each in ['Image', 'Text']:
            if each in v.keys():
                md = md + '## %s\n%s\n'%(each, v[each])

        md = md + '## Choices\n'
        for k1, v1 in v['Choices'].items():
            md = md + '### %s\n'%k1
            qual_f = ''
            if '@if' in v1:
                qual_f = v1['@if']
                v1.pop('@if')
            if v1 != {}:
                md = md + beautify_table(v1) + '\n\n'
            if qual_f != '':
                md = md + '@if' + qual_f + '\n\n'

        # if section is choice or qualities
        # then check for tables

        # adds a breaking line
        md = md + '\n#####\n'

    return md

def clean_json(j):
    ''' From a JSONified Markdown file, reformats selected bits of the JSON when
    necessary e.g. turning Quality/Choices tables to dictionaries '''
    log.info('* Cleaning JSON.')

    from collections import OrderedDict
    res = OrderedDict()
    # then appends scenes
    for k, v in j.items():
        sc = {}
        # Starts with Qualities: looks for either one table or a function or both
        # NB: the function is identified using @function
        if '@function' in v['Qualities']:
            qual_d, qual_f = v['Qualities'].split('@function')
        else:
             qual_d, qual_f = v['Qualities'], ''
        qual_dict = dict(parse_dict(qual_d))

        if qual_f != '':
            qual_dict['@function'] = qual_f
        sc['Qualities'] = qual_dict

        # Image and Text do not need to be touched at this stage
        for each in ['Image', 'Text']:
            if each in v.keys():
                sc[each] = v[each]

        # Ends with Choices: looks for either one table or a function or both
        # NB: the function is identified using @if
        ch = OrderedDict()
        for k1, v1 in v['Choices'].items():
            if '@if' in v1:
                qual_d, qual_f = v1.split('@if')
            else:
                qual_d, qual_f = v1, ''
            d = parse_dict(qual_d)
            choice_dict = dict(d)

            if qual_f != '':
                choice_dict['@if'] = qual_f
            ch[k1] = choice_dict
        sc['Choices'] = ch
        res[k] = sc

    return res

def gen_qualities_code(conditions):
    ''' From a JSON dict generates JS code for Qualities / conditions.
    `conditions` is a list of 2-uples built from dictionary/@function and
     preamble.'''
    f = []
    res = ''
    for k, v in conditions:
        f.append('a%s'%(len(f)+1))
        if k == '@function':
            if_func = v.replace('function', 'function %s'%f[-1])
            res = res + if_func +';\n'
        else:
            res =  res + 'function %s(){ return (vartable["%s"]=="%s"); };'%(f[-1], k, v)

    res = '\n%s'%res
    c = ' && '.join(['%s()'%e for e in f])
    res = res + 'return (%s);\n'%c

    return res

def gen_choice(code):
    ''' From a JSON dict generates JS code for Choices'''
    import json
    res = ''
    for label, option in code.items():
        # label is the text of the choice, option is the assigned code
        if_func = ''
        if '@if' in option.keys():
            if_func = ', ' + option['@if']
            option.pop('@if')

        res = res + '["%s", %s%s],'%(label, json.dumps(option), if_func)

    return 'choices:[%s]'%res


def gen_storylet_code(code):
    ''' Turns the Text section in a JS playable sequence.
    By default, every bit appears with a 'fadeIn' effect in 1000 ms.'''

    def gen_playsequence(code):
        seq = ''
        for each in code.split('\n'):
            each = markdown.markdown(each)
            eachcode = '{addDialog("%s", "fadeIn")}, 1000'%each
            seq = seq + '    [function()%s],\n'%(eachcode)
        return seq

    storylet_code = '  playSequence([%s%s%s    [choice, 0]])'\
        %("%s", gen_playsequence(code), "%s")
    return storylet_code

def json_to_javascript(j, preamble={}):

    if preamble == {}:
        log.info('* No preamble provided.')

    js = ''
    for sc_name, sc in j.items():

        # Start with Qualities (adds conditions from preamble if any)
        conditions = sc['Qualities'].items()

        preamble_cond = preamble['qualities'].items()\
            if not preamble['qualities'] is None else []
        log.info('%s conditions'%len(conditions))
        if len(preamble_cond) != 0:
            log.info('%s preamble conditions'%len(preamble_cond))
        if sc_name == 'SceneChoixLangues':
            log.info('####')
            log.info(conditions)
        if '@function' in [e[0] for e in conditions]:
                log.info('@function detected in these conditions')

        conditions.extend(preamble_cond)
        qual_code = gen_qualities_code(conditions)

        # Generate the sequence for text, the image
        storylet_code = gen_storylet_code(sc['Text'])
        image = '' if not 'Image' in sc.keys()\
            else '[function(){displayImage("%s")}, 1000],\n'%sc['Image']
        extra_code = '' if not 'Code' in sc.keys()\
            else '   [function(){%s}, 0],\n'%sc['Code']

        # Works with Choices
        choices_code = '' if not 'Choices' in sc.keys() \
            else gen_choice(sc['Choices'])

        # Compiles everything
        sc_code = '  qualities:function(){\n    %s\n  },\n'\
            '  storylet:function(choice){\n%s\n  },\n%s'\
            %(qual_code, storylet_code%(image, extra_code), choices_code)
        scene_js = '%s = {\n%s\n}'%(sc_name, sc_code)
        js = js + scene_js + '\n\n'

    # Ends with listing all the scenes in the `ready` function
    pushlist = ''
    for sc_name, _ in j.items():
        pushlist = pushlist + '  storylets.push(%s);\n'%sc_name

    js = js + '$(document).ready(function(){\n%s});'%pushlist
    return js

def jsonify_markdown(md_fp):
    ''' Reads a Markdown file and parses it to build a first JSON object'''
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

def markdown_to_json(md_fp, rebuild_md=True):
    ''' Creates a new .md file without lines full of --------
    This new file is named [markdown_file].md1
    If `rebuild_md` is True then the Markdown file is rewritten nicely (with
    beautified tables)'''
    lines = open(md_fp).readlines()

    lines = remove_minuslines(lines)
    #jsvn.beautify_md(md_fp)
    preamble, body = get_preamble(lines)

    # Saves new file without preamble named [markdown_file].md1
    with open(md_fp+'1', 'w') as w:
        w.write(''.join(body))

    # Creates a Json from Markdown
    j = jsonify_markdown(md_fp+'1')

    # Improves a few bits in the json
    j = clean_json(j)
    log.info("clean")
    log.info(j['SceneChoixLangues'])

    if rebuild_md:
        log.info('* Rebuild MD')
        md = regenerate_md(preamble, j)
        md_fp2 = md_fp.replace('.md','.beautified.md')
        with open(md_fp2, 'w') as w:
            w.write(md)

    log.info('fin')
    log.info(j['SceneChoixLangues'])
    return preamble, j