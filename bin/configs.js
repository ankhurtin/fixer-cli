"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = exports.API_KEY = exports.PUBLIC_ENV = exports.ROOT = void 0;
const app_root_path_1 = __importDefault(require("app-root-path"));
const dotenv = __importStar(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const ROOT = app_root_path_1.default.path;
exports.ROOT = ROOT;
const PUBLIC_ENV = dotenv.config({
    path: ROOT + '/public.env',
}).parsed;
exports.PUBLIC_ENV = PUBLIC_ENV;
const getUserApiKey = () => {
    try {
        return fs_1.default.readFileSync('key.txt').toString();
    }
    catch (_a) {
        return undefined;
    }
};
const API_KEY = process.env.NODE_ENV == 'development'
    ? (_a = dotenv.config().parsed) === null || _a === void 0 ? void 0 : _a.API_KEY
    : getUserApiKey();
exports.API_KEY = API_KEY;
const URL = 'https://api.apilayer.com/fixer/';
exports.URL = URL;
