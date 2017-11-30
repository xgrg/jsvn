#! /usr/bin/env python
# prepare a folder build/ with everything
import os
import os.path as osp
from glob import glob
os.system('mkdir build/')
os.system('cp -r images/ css/ js/ index.html md/ build/')


# compile all md files in md:
done = []
errors = []
md_files = glob('./build/md/*.md')
for md in md_files:
    print ""
    print '###',md,'###'
    json_fp = md.replace('.md', '.json')
    js_fp = md.replace('.md', '.js')
    cmd = 'python python/md_to_js.py %s %s %s'%(md, json_fp, js_fp)
    print cmd
    res = os.system(cmd)
    if (res==0):
        print md, 'converted successfully'
        done.append(md)
    else:
        errors.append(md)

os.system('rm build/md/*.json')
os.system('rm build/md/*.md')

# summary
print '\n\n===================================================================='
print 'The following files were correctly processed: \n%s'%', '.join(done)
print '\nThe following files resulted with errors: \n%s'%', '.join(errors)
print '========================================================================'


# commit this folder to gh-pages
basedir = os.curdir
inputdir = basedir
outputdir = osp.join(basedir, 'build')
github_pages_branch = 'gh-pages'


os.system('ghp-import -m "Generate JSVN site" -b %s %s'%(github_pages_branch, outputdir))
os.system('git push origin %s'%github_pages_branch)
os.system('rm -rf build/')
