from parse import *

def get_images_from_json(j):
    images = []
    for k, v in j.items():
        if 'Image' in v.keys():
            images.append(v['Image'])
    return images
