#! /usr/bin/env python

def markdown_to_js(md_fp, json_fp, js_fp):
    import jsvn, json
    # Creates a new .md file without lines full of --------
    # This new file is named [markdown_file].md1
    jsvn.remove_minuslines(md_fp)
    preamble = jsvn.get_preamble(md_fp, verbose=1)

    # Creates a Json from Markdown
    j = jsvn.jsonify_markdown(md_fp+"1")
    json.dump(j, open(json_fp, 'w'), indent=2, ensure_ascii=False, encoding ='utf-8')

    # Generates JS from Json
    js = jsvn.get_javascript(j)
    w = open(js_fp, 'w')
    w.write(js)
    w.close()

if __name__ == '__main__':
    import argparse

    # Parsing options
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
    markdown_to_js(md_fp, json_fp, js_fp)
