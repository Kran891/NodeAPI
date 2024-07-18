"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi_validator_1 = require("express-openapi-validator/dist/openapi.validator");
const jsonErrorMiddleware = (err, req, res, _next) => {
    if (err instanceof openapi_validator_1.BadRequest)
        res.status(400).json(err.message);
    res.status(409).json(err.message);
};
exports.default = jsonErrorMiddleware;
