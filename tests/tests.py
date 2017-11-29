import os, sys
sys.path.append('./python')
print sys.path
import md_to_js

def test_vallter():
    md_fp = './tests/vallter.md'
    json_fp = './tests/vallter.json'
    js_fp = './tests/vallter.js'
    print 'toto'
    md_to_js.markdown_to_js(md_fp, json_fp, js_fp)
