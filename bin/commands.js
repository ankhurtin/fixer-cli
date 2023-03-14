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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = exports.info = exports.convert = void 0;
const api_1 = require("./api");
const fs_1 = __importDefault(require("fs"));
const convert = (base, currency, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.fixerAPI.getConvert(base, currency, amount);
    const query = response.query;
    console.log(`${query.amount} ${query.from} to ${query.to} = ${response.result}`);
});
exports.convert = convert;
const info = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.fixerAPI.getInfo();
    const symbols = response.symbols;
    console.table(Object.keys(symbols).map((e) => [e, symbols[e]]));
});
exports.info = info;
const key = (key) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs_1.default.promises.writeFile('key.txt', key);
    console.log('Your key succesfull added.');
});
exports.key = key;
