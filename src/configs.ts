import appRoot from 'app-root-path';
import * as dotenv from 'dotenv';
import fs from 'fs';

const ROOT = appRoot.path;

const PUBLIC_ENV = dotenv.config({
  path: ROOT + '/public.env',
}).parsed;

const getUserApiKey = () => {
  try {
    return fs.readFileSync('key.txt').toString();
  } catch {
    return undefined;
  }
};

const API_KEY =
  process.env.NODE_ENV == 'development'
    ? dotenv.config().parsed?.API_KEY
    : getUserApiKey();

const URL = 'https://api.apilayer.com/fixer/';

export { ROOT, PUBLIC_ENV, API_KEY, URL };
