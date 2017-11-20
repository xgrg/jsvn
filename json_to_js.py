#! /usr/bin/env python
from markdown_to_json.scripts import md_to_json
import json, string

md_fp = './md/storylet.md'
json_fp = './md/storylet.json'
js_fp = './md/storylet.js'
md_to_json.jsonify_markdown(md_fp, json_fp, 2)
j = json.load(open(json_fp))

from pprint import pprint
pprint(j)

def get_sequence(code):
    return ''

def get_playsequence(code):
    seq = ''
    for each in code:
        print each
        duration = string.atoi(each[each.rfind('(')+1:each.rfind(')')])
        eachcode = each[:each.rfind('(')]
        seq = seq + '    [function(){%s}, %s],\n'%(eachcode, duration)
    return seq

def get_storylet_code(code):
    storylet_code = ''
    if code[0] == 'playSequence':
        storylet_code = '  playSequence([%s    [choice, 0]])'%get_playsequence(code[1])
    else:
        for each in code:
            storylet_code = storylet_code + each + '\n'
    return storylet_code



js = ''
for sc_name, sc in j.items():
    qual_code = sc['Qualities']
    storylet_code = get_storylet_code(sc['Storylet'])
    choices_code = json.dumps(sc['Choices'])
    sc_code = '  qualities:function(){\n    %s\n  },\n'\
        '  storylet:function(choice){\n%s\n  },\n  choices:%s'\
        %(qual_code, storylet_code, choices_code)
    scene_js = '%s = {\n%s\n}'%(sc_name, sc_code)
    js = js + scene_js + '\n\n'


pushlist = ''
for sc_name, _ in j.items():
    pushlist = pushlist + '  storylets.push(%s);\n'%sc_name
js = js + '$(document).ready(function(){\n%s});'%pushlist
print ''
print js
w = open(js_fp, 'w')
w.write(js)
w.close()
