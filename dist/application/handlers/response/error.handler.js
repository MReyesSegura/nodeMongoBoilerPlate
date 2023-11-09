"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appErrorResponseHandler = void 0;
const app_response_1 = require("../../models/app.response");
const jsonwebtoken_1 = require("jsonwebtoken");
function appErrorResponseHandler(error) {
    var _a, _b;
    const result = new app_response_1.AppResponse();
    if (error instanceof app_response_1.AppErrorResponse) {
        result.message = (_a = error.message) !== null && _a !== void 0 ? _a : 'Error del server';
        result.code = (_b = error.code) !== null && _b !== void 0 ? _b : null;
        return { statusCode: error.statusCode, error: result };
    }
    if (error instanceof jsonwebtoken_1.TokenExpiredError) {
        return { statusCode: 401, code: 'ACCESS_TOKEN_EXPIRED', error };
    }
    result.message = String(error);
    return { statusCode: 500, error: result };
}
exports.appErrorResponseHandler = appErrorResponseHandler;
