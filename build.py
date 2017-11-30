#! /usr/bin/env python
# prepare a folder build/ with everything
import os
import os.path as osp
os.system('mkdir build/')
os.system('cp -r images/ css/ js/ md/ index.html build/')

# commit this folder to gh-pages
basedir = os.curdir
inputdir = basedir
outputdir = osp.join(basedir, 'build')
github_pages_branch = 'gh-pages'


os.system('ghp-import -m "Generate JSVN site" -b %s %s'%(github_pages_branch, outputdir))
#os.system('git push origin %s'%github_pages_branch)
#os.system('rm -rf build/')
