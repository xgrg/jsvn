#! /usr/bin/env python

def get_playsequence(code):
    seq = ''
    for each in code.split('\n'):
        print each

        eachcode = '{addDialog("%s", "fadeIn")}, 1000'%each
        seq = seq + '    [function()%s],\n'%(eachcode)
    return seq

def get_storylet_code(code):
    storylet_code = '  playSequence([%s%s%s    [choice, 0]])'%("%s", get_playsequence(code), "%s")
    return storylet_code

def get_choice(code):
    res = ''

    for k,v in code.items():
        d = {}
        if_func = ''
        for i, each in enumerate(v.split('\n')):

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

def get_javascript(j):
    js = ''
    for sc_name, sc in j.items():
        qual_code = sc['Qualities']
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
    print ''
    #print js
    return js


if __name__ == '__main__':

    import json, argparse
    parser = argparse.ArgumentParser(description='Converts Markdown code to Javascript\
        that can run as scenes', prog='md_to_js2',
        usage='%(prog)s markdown_file [json_file] [js_file]\n\n'\
            'If omitted json_file and js_file are made up from '\
            'markdown_file')
    parser.add_argument('md', help='Markdown file')
    parser.add_argument('json', nargs='?', help='Json file')
    parser.add_argument('js', nargs='?', help='JS file')
    args = parser.parse_args()
    md_fp = args.md
    json_fp = args.json if not args.json is None else md_fp.replace('.md','.json')
    js_fp = args.js if not args.js is None else md_fp.replace('.md','.js')

    print md_fp, json_fp, js_fp

    remove_minuslines(md_fp)

    from markdown_to_json.scripts import md_to_json
    md_to_json.jsonify_markdown(md_fp+'1', json_fp, 2)
    j = json.load(open(json_fp))

    js = get_javascript(j)

    w = open(js_fp, 'w')
    w.write(js)
    w.close()
