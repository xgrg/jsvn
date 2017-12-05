from __future__ import print_function
import markdown
import tabulate
import pandas as pd
import logging as log


def markdown_table_to_dict(code):
    ''' From a Markdown table to a dictionary '''
    from markdown.extensions import tables
    html = markdown.markdown(code, extensions=[tables.makeExtension()])
    df = pd.read_html(html, converters={'value': str})[0]
    booleanDictionary = {True: 'true', False: 'false'}
    df = df.replace(booleanDictionary)
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
        if '@action' in each:
            k, v = each.split(':')
            res.append((k,''.join(v.split('\n'))))
        elif '@' not in each: #ignore lines starting with @
            each = clean_line(each)
            k, v = each.split(':')
            res.append((k,v))
        else:
            break
    return dict(res)

def parse_dict(code):
    ''' From Markdown code to a dictionary (used for Qualities/Choices).
    Can be either simple text or Markdown table'''
    def is_markdown(code):
        is_md = 0
        for each in code.split('\n'):
            if ('variable' in each and 'value' in each) or \
               len(set(each).intersection(set('-|:'))) > 2:
                    is_md = is_md + 1
        return is_md == 2

    #log.info('is_markdown:%s'%is_markdown(code))
    if is_markdown(code):
        d = markdown_table_to_dict(code)
        return d
    else:
        if clean_line(code) == '': return {}
        d = get_dict(code)
        return d

def remove_minuslines(lines):
    ''' Creates a new file with same content minus lines full of ------'''
    log.info('* Removing minus lines.')
    #log.info('Reading: %s'%md_fp)

    res = []
    for each in lines:
        is_line = False
        clean = clean_line(each)
        if len(set(clean)) == 1:
            for s in ['---', '***', '###']:
                if clean.startswith(s):
                    is_line = True
                    break
        if not is_line:
            res.append(each)
    return res

def clean_line(line):
    ''' removes any space and convert to lowercase'''
    return ''.join(line.split(' ')).lower().rstrip('\n')

def does_start_by_preamble_key(line, preamble):
    for each in preamble.keys():
        if line.lower().startswith(each):
            return each
    return False

def get_preamble(lines):
    ''' Returns the current version of the Markdown-based language used
    Note: actually runs on the .md1 file so that these optional lines get removed
    as are breaking lines.'''

    preamble = {'version': None, 'qualities':None, 'extensions':None}

    log.info('* Fetching preamble.')
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

    body = []
    for each in lines[i:]:
        body.append(each)

    # Processing split preamble
    for each in split:
        if each == '': continue
        each = clean_line(each)
        k, v = each[:each.find(':')], each[each.find(':')+1:]
        if k == 'qualities':
            v = v.strip('\n').rstrip('\n')
            d = parse_dict(v)
            preamble[k] = d
        elif k == 'extensions':
            preamble[k] = v.split(',')
        else:
            if k in preamble.keys():
                preamble[k] = v
            else:
                raise Exception('%s unknown (%s)'%(k, ', '.join(preamble.keys())))

    log.info('Found preamble:')
    from pprint import pprint
    pprint(preamble, indent=2)

    return preamble, body
