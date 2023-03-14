import { URL, API_KEY } from './configs';

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

    if (data.status !== 200) {
      throw new Error('Response failed. Pls, check your api key or try later.');
    }
    const response = await data.json();

    return response;
  }

  public async getInfo() {
    const data = await fetch(this.url + 'symbols', this.getFetchConfig());
    console.log(data, this.key, 'data key');
    if (data.status !== 200) {
      throw new Error('Response failed. Pls, check your api key or try later.');
    }
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

export const fixerAPI = new FixerAPI(URL, API_KEY as string);
