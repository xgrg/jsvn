import os, sys
sys.path.append('./python')
import md_to_js
import jsvn

''' These tests are based on the Vallter scenes.
The first ones check that the Markdown to JS conversion just gets to the end.'''

md_fp = './tests/vallter_beautifytables.md'
json_fp = './tests/vallter_beautifytables.json'
js_fp = './tests/vallter_beautifytables.js'

def test_markdown_to_js():
    md_to_js.markdown_to_js(md_fp, json_fp, js_fp)

def test_jsonify_markdown():
    res = jsvn.jsonify_markdown(md_fp+'1')
    print res

def test_preamble():
    lines = open(md_fp).readlines()
    lines = jsvn.remove_minuslines(lines)
    p = jsvn.get_preamble(lines)

def test_parse_args():
    md_to_js.__parse_args__(args=[md_fp, json_fp, js_fp])

def test_uglytables():
    md_fp = './tests/vallter_uglytables.md'
    p, b = jsvn.markdown_to_json(md_fp, rebuild_md=False)
    md = jsvn.regenerate_md(p, b)

def test_beautifiedtables():
    md_fp = './tests/vallter_beautifytables.md'
    p, b = jsvn.markdown_to_json(md_fp, rebuild_md=False)
    md = jsvn.regenerate_md(p, b)
