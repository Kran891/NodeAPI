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
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const DBNAME = process.env.DBNAME || "bags";
const MONGO_URL = process.env.MONGO_URL || `mongodb://localhost:27017/${DBNAME}`;
const PORT = process.env.PORT || 4000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGO_URL);
    }
    catch (err) {
        console.log("❌❌ AN Error Occured,", err);
    }
    http_1.default.createServer(app_1.app).listen(PORT, () => {
        console.log(`✅✅ Running on http://localhost:${PORT}/docs`);
    });
});
start();
