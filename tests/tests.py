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
    import sys
    reload(sys)
    sys.setdefaultencoding('iso-8859-1')

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

    def jsonify_markdown(markdown_file, outfile, indent):
        nester = CMarkASTNester()
        renderer = Renderer()
        ast = get_markdown_ast(markdown_file)
        nested = nester.nest(ast)
        rendered = renderer.stringify_dict(nested)

    jsonify_markdown(md_fp+"1", json_fp, 2)
