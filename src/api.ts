import appRoot from 'app-root-path';
import * as dotenv from 'dotenv';

const ROOT = appRoot.path;

const PUBLIC_ENV = dotenv.config({
  path: ROOT + '/public.env',
}).parsed;

const API_KEY =
  process.env.NODE_ENV == 'development'
    ? dotenv.config().parsed?.API_KEY
    : PUBLIC_ENV?.API_KEY;

const URL = PUBLIC_ENV?.URL as string;

class FixerAPI {
  private url;
  private key;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  public async getConvert(base: string, currency: string, amount = 1) {
    const data = await fetch(
      this.url + `convert?to=${currency}&from=${base}&amount=${amount}`,
      this.getFetchConfig()
    );
    const response = await data.json();

    return response;
  }

  public async getInfo() {
    const data = await fetch(this.url + 'symbols', this.getFetchConfig());
    const response = await data.json();

    return response;
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('apikey', this.key);

    return headers;
  }

  private getFetchConfig(): RequestInit {
    return {
      method: 'GET',
      redirect: 'follow',
      headers: this.getHeaders(),
    };
  }
}

const fixerAPI = new FixerAPI(URL, API_KEY as string);

export { ROOT, PUBLIC_ENV, URL, API_KEY, fixerAPI };
