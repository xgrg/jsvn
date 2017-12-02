import json
import markdown

def get_qualities_code(code):
    f = []
    res = ''
    varname = 'a'
    for i, each in enumerate(code.split('\n')):
        if each == '': continue # ignore blank lines

        if ':' in each:
            k1, v1 = each.replace(' ','').split(':')
            f.append('a%s'%(len(f)+1))
            res =  res + 'function %s(){ return (vartable["%s"]=="%s"); };'%(f[-1], k1, v1)
        if each.startswith('@function'):
            if_func = '\n'.join(code.split('\n')[i+1:])
            f.append('a%s'%(len(f)+1))
            if_func = if_func.replace('function', 'function %s'%f[-1])
            res = res + if_func +';\n'

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

    for k,v in code.items():
        # k is the text of the choice, v is the assigned code
        d = {}
        if_func = ''
        for i, each in enumerate(v.split('\n')):
            if each == '': continue # ignore blank lines

            if ':' in each:
                k1, v1 = each.replace(' ','').split(':')
                d[k1] = v1
            if each.startswith('@if'):
                if_func = ',%s'%'\n'.join(v.split('\n')[i+1:])
        res = res + '["%s", %s%s],'%(k,json.dumps(d), if_func)

    return 'choices:[%s]'%res

def remove_minuslines(md_fp):
    ''' Creates a new file with same content minus lines full of ------'''
    lines = open(md_fp).readlines()
    w = open(md_fp+'1', 'w')
    for each in lines:
        if not '----' in each:
           w.write(each)
    w.close()

def get_preamble(md_fp, verbose=1):
    ''' Returns the current version of the Markdown-based language used
    Note: actually runs on the .md1 file so that these optional lines get removed
    as are breaking lines.'''

    def clean_line(line):
        ''' removes any space and convert to lowercase'''
        import string
        return string.lower(''.join(line.split(' '))).rstrip('\n')

    lines = open(md_fp+'1').readlines()
    if verbose == 1:
        print('Reading %s.'%(md_fp+'1'))
    w = open(md_fp+'1', 'w')
    is_preamble = True
    preamble = {'version': None}
    for each in lines:
        if each.startswith('#'):
            is_preamble = False
        if is_preamble:
            if ':' not in each:
                raise Exception('%s not interpreted'%each)
            k, v = clean_line(each).split(':')
            if not k in preamble:
                raise Exception('%s not known (%s)'\
                    %(k, ','.join(preamble.keys())))
            preamble[k] = v
        if not is_preamble:
            w.write(each)

    w.close()
    if verbose == 1:
        print ('Writing %s.'%(md_fp+'1'))
        print ('Found preamble:')
        from pprint import pprint
        pprint(preamble, indent=2)

    return preamble

def get_javascript(j):
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

    import logging
    logging.basicConfig(
        format="%(message)s", stream=sys.stderr, level=logging.INFO)

    def get_markdown_ast(markdown_file):
        try:
            f = open(markdown_file, 'r')
            return CommonMark.DocParser().parse(f.read())
        except:
            logging.error("Error: Can't open {0} for reading".format(
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

    res = jsonify_markdown(md_fp)
    return res
