"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_openapi_validator_1 = require("express-openapi-validator");
const path_1 = __importDefault(require("path"));
const OpenAPI = () => {
    return (0, express_openapi_validator_1.middleware)({
        apiSpec: path_1.default.join(__dirname, '../oas.yaml'),
        operationHandlers: path_1.default.join(__dirname, "../controllers"),
        validateRequests: true,
        validateResponses: {
            onError: (err, _body, req) => {
                console.log(err);
            },
        }
    });
};
exports.default = OpenAPI;
