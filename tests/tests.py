import os, sys
sys.path.append('./python')
import md_to_js

def test_vallter():
    md_fp = './tests/vallter.md'
    json_fp = './tests/vallter.json'
    js_fp = './tests/vallter.js'

    md_to_js.markdown_to_js(md_fp, json_fp, js_fp)

def test_vallter2():
    md_fp = './tests/vallter.md'
    json_fp = './tests/vallter.json'
    js_fp = './tests/vallter.js'

    os.system('md_to_json %s %s 2'%(md_fp+'1', json_fp))
