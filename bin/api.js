"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixerAPI = void 0;
const configs_1 = require("./configs");
class FixerAPI {
    constructor(url, key) {
        this.url = url;
        this.key = key;
    }
    getConvert(base, currency, amount = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(this.url + `convert?to=${currency}&from=${base}&amount=${amount}`, this.getFetchConfig());
            if (data.status !== 200) {
                throw new Error('Response failed. Pls, check your api key or try later.');
            }
            const response = yield data.json();
            return response;
        });
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(this.url + 'symbols', this.getFetchConfig());
            console.log(data, this.key, 'data key');
            if (data.status !== 200) {
                throw new Error('Response failed. Pls, check your api key or try later.');
            }
            const response = yield data.json();
            return response;
        });
    }
    getHeaders() {
        const headers = new Headers();
        headers.append('apikey', this.key);
        return headers;
    }
    getFetchConfig() {
        return {
            method: 'GET',
            redirect: 'follow',
            headers: this.getHeaders(),
        };
    }
}
exports.fixerAPI = new FixerAPI(configs_1.URL, configs_1.API_KEY);
