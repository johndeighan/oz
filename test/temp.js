var code, content, filename, hResult, inpath, root;

import {
  sep_eq
} from '@jdeighan/coffee-utils';

import {
  slurp
} from '@jdeighan/coffee-utils/fs';

import {
  log
} from '@jdeighan/coffee-utils/log';

import {
  setPrivEnvVar
} from '@jdeighan/coffee-utils/privenv';

import {
  starbucks
} from '@jdeighan/starbucks';

import {
  // temp.cielo
  loadPrivEnvFrom
} from '@jdeighan/env';

root = "c:/Users/johnd/oz";

loadPrivEnvFrom(root);

filename = '_index.starbucks';

inpath = `${root}/src/routes/${filename}`;

content = slurp(inpath);

log(sep_eq);

log(content);

log(sep_eq);

setPrivEnvVar('DIR_STORES', "c:/Users/johnd/oz/src/stores");

hResult = starbucks({content, filename});

code = hResult.code;

log(code);

log(sep_eq);
