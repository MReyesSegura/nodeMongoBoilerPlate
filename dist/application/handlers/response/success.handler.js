"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSuccessResponseHandler = void 0;
const app_response_1 = require("../../models/app.response");
function appSuccessResponseHandler(message, data) {
    const result = new app_response_1.AppResponse();
    result.message = message;
    result.response = data;
    return result;
}
exports.appSuccessResponseHandler = appSuccessResponseHandler;
