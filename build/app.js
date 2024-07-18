"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const body_parser_1 = require("body-parser");
const path_1 = __importDefault(require("path"));
const open_api_middleware_1 = __importDefault(require("./api/middlewares/open-api-middleware"));
const json_error_middleware_1 = __importDefault(require("./api/middlewares/json-error-middleware"));
const DOCS = yamljs_1.default.load(path_1.default.join(__dirname, "./api/oas.yaml"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, body_parser_1.json)());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(DOCS));
app.use((0, open_api_middleware_1.default)());
app.use(json_error_middleware_1.default);
