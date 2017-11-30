import os, sys
sys.path.append('./python')
import md_to_js
import jsvn

''' These tests are based on the Vallter scenes.
The first ones check that the Markdown to JS conversion just gets to the end.'''

def test_markdown_to_js():
    md_fp = './tests/vallter.md'
    json_fp = './tests/vallter.json'
    js_fp = './tests/vallter.js'

    md_to_js.markdown_to_js(md_fp, json_fp, js_fp)

def test_jsonify_markdown():
    md_fp = './tests/vallter.md'
    json_fp = './tests/vallter.json'
    js_fp = './tests/vallter.js'

    res = jsvn.jsonify_markdown(md_fp+'1')
    print res
