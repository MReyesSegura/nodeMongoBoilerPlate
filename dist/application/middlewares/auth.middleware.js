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
exports.userMiddleware = void 0;
/* handlers */
const response_1 = require("../handlers/response");
/* models */
const app_response_1 = require("../models/app.response");
/* utils */
const auth_util_1 = require("../utils/auth.util");
function userMiddleware(req, res, next) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authHeader = req.headers.authorization;
            const sessionToken = (_c = (_b = (_a = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split) === null || _a === void 0 ? void 0 : _a.call(authHeader, ' ')) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : false;
            if (typeof sessionToken === 'undefined' || sessionToken === false) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 403,
                    name: 'Se requiere un token de acceso válido',
                    description: 'Se requiere un token de acceso válido',
                    isOperational: true
                });
            }
            const verified = (0, auth_util_1.verifyToken)(sessionToken);
            res.locals.user = verified;
            next();
        }
        catch (error) {
            const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
            res.status(statusCode).json({ error });
        }
    });
}
exports.userMiddleware = userMiddleware;
