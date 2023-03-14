import { fixerAPI } from './api';
import fs from 'fs';

const convert = async (base: string, currency: string, amount: number) => {
  const response = await fixerAPI.getConvert(base, currency, amount);
  const query = response.query;

  console.log(
    `${query.amount} ${query.from} to ${query.to} = ${response.result}`
  );
};

const info = async () => {
  const response = await fixerAPI.getInfo();
  const symbols = response.symbols;

  console.table(Object.keys(symbols).map((e) => [e, symbols[e]]));
};

const key = async (key: string) => {
  await fs.promises.writeFile('key.txt', key);
  console.log('Your key succesfull added.');
};

export { convert, info, key };
