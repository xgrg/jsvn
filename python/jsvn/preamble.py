from __future__ import print_function
import markdown
import tabulate
import pandas as pd
import logging as log


def markdown_table_to_dict(code):
    ''' From a Markdown table to a dictionary '''
    from markdown.extensions import tables
    html = markdown.markdown(code, extensions=[tables.makeExtension()])
    df = pd.read_html(html)[0]
    rec = [(e[1], e[2]) for e in df.to_records()]
    return dict(rec)

def get_dict(code):
    ''' From simple text to dict.
    ex: sc:0
        lang:fr
        @function etc
    '''
    res = []
    for each in code.split('\n'):
        if each == '': continue #ignore blank lines
        if '@' not in each: #ignore lines starting with @
            each = clean_line(each)
            k, v = each.split(':')
            res.append((k,v))
        else:
            break
    return dict(res)

def parse_dict(code):
    ''' From Markdown code to a dictionary (used for Qualities/Choices).
    Can be either simple text or Markdown table'''
    # TODO find a way to identify in advance Markdown table / simple text
    try:
        d = markdown_table_to_dict(code)
        return d
    except:
        if code == '': return {}
        d = get_dict(code)
        return d


def clean_line(line):
    ''' removes any space and convert to lowercase'''
    return ''.join(line.split(' ')).lower().rstrip('\n')

def does_start_by_preamble_key(line, preamble):
    for each in preamble.keys():
        if line.lower().startswith(each):
            return each
    return False

def get_preamble(md_fp):
    ''' Returns the current version of the Markdown-based language used
    Note: actually runs on the .md1 file so that these optional lines get removed
    as are breaking lines.'''

    lines = open(md_fp).readlines()

    log.info('* Fetching preamble.')
    log.info('Reading %s.'%(md_fp+'1'))

    w = open(md_fp+'1', 'w')
    preamble = {'version': None, 'qualities':None}
    # Splitting preamble
    split = []
    i = 0
    prev = -1
    curr = 0
    while i < len(lines):
        each = lines[i]
        if each.startswith('#'):
            break
        if each == '':
            i = i + 1
            continue
        k = does_start_by_preamble_key(each, preamble)
        if not k is False:
            prev = curr
            curr = i
            if prev != -1:
                split.append(''.join(lines[prev:curr]))
        i = i + 1
    split.append(''.join(lines[curr:i]))

    for each in lines[i:]:
        w.write(each)
    w.close()

    # Processing split preamble
    for each in split:
        if each == '': continue
        each = clean_line(each)
        k, v = each[:each.find(':')], each[each.find(':')+1:]
        if k == 'qualities':
            v = v.strip('\n').rstrip('\n')
            d = parse_dict(v)
            preamble[k] = d
        else:
            if k in preamble.keys():
                preamble[k] = v
            else:
                raise Exception('%s unknown (%s)'%(k, ', '.join(preamble.keys())))

    log.info('Writing %s.'%(md_fp+'1'))
    log.info('Found preamble:')
    from pprint import pprint
    pprint(preamble, indent=2)

    return preamble
