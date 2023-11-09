"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientMiddleware = void 0;
const app_response_1 = require("../models/app.response");
/* device detector  */
const node_device_detector_1 = __importDefault(require("node-device-detector"));
/* ip address */
const ip_1 = __importDefault(require("ip"));
const detector = new node_device_detector_1.default({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false
});
function clientMiddleware(req, res, next) {
    var _a;
    const userAgent = (_a = req.get('User-Agent')) !== null && _a !== void 0 ? _a : false;
    const ipAddress = ip_1.default.address();
    if (typeof userAgent === 'undefined' || userAgent === false) {
        throw new app_response_1.AppErrorResponse({
            statusCode: 403,
            name: '[DEVICE_ERR] - No se puede realizar la acción',
            description: '[DEVICE_ERR] - No se puede realizar la acción',
            isOperational: true
        });
    }
    if (typeof ipAddress === 'undefined') {
        throw new app_response_1.AppErrorResponse({
            statusCode: 403,
            name: '[ADDR_DEVICE_ERR] - No se puede realizar la acción',
            description: '[ADDR_DEVICE_ERR] - No se puede realizar la acción',
            isOperational: true
        });
    }
    res.locals.device = detector.detect(userAgent);
    res.locals.ipAddress = ipAddress;
    next();
}
exports.clientMiddleware = clientMiddleware;
