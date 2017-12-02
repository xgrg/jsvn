import os, sys
sys.path.append('./python')
import md_to_js
import jsvn

''' These tests are based on the Vallter scenes.
The first ones check that the Markdown to JS conversion just gets to the end.'''

md_fp = './tests/vallter.md'
json_fp = './tests/vallter.json'
js_fp = './tests/vallter.js'

def test_markdown_to_js():
    md_to_js.markdown_to_js(md_fp, json_fp, js_fp)

def test_jsonify_markdown():
    res = jsvn.jsonify_markdown(md_fp+'1')
    print res

def test_preamble():
    jsvn.remove_minuslines(md_fp)
    p = jsvn.get_preamble(md_fp)

def test_parse_args():
    md_to_js.__parse_args__(args=[md_fp, json_fp, js_fp])
