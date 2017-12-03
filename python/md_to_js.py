#! /usr/bin/env python
from __future__ import print_function
import logging as log

def markdown_to_js(md_fp, json_fp, js_fp):
    import jsvn, json

    log.info('Markdown file: %s'%md_fp)
    log.info('JSON file: %s'%json_fp)
    log.info('JS file: %s'%js_fp)

    preamble, body = jsvn.markdown_to_json(md_fp,rebuild_md=False)
    json.dump(body, open(json_fp, 'w'), indent=2, ensure_ascii=False, encoding ='utf-8')

    # Generates JS from Json
    js = jsvn.json_to_javascript(body, preamble)
    w = open(js_fp, 'w')
    w.write(js)
    w.close()

def __parse_args__(args=None):
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
    parser.add_argument('--verbose', action='store_true', help='verbosity')
    args = parser.parse_args(args)
    if args.verbose:
        log.basicConfig(format="%(levelname)s: %(message)s", level=log.INFO)
    else:
        log.basicConfig(format="%(levelname)s: %(message)s")
    return args

if __name__ == '__main__':
    args = __parse_args__()
    md_fp = args.md

    json_fp = args.json if not args.json is None else md_fp.replace('.md','.json')
    js_fp = args.js if not args.js is None else md_fp.replace('.md','.js')

    markdown_to_js(md_fp, json_fp, js_fp)
