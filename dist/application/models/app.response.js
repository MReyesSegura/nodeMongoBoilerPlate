"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorResponse = exports.AppResponse = void 0;
class AppResponse {
    constructor(init) {
        this.message = 'success';
        Object.assign(this, init);
    }
}
exports.AppResponse = AppResponse;
class AppErrorResponse extends Error {
    constructor(args) {
        var _a, _b, _c, _d;
        super(args.description);
        this.isOperational = true;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = (_a = args.name) !== null && _a !== void 0 ? _a : 'Error en la petición';
        this.description = (_b = args.description) !== null && _b !== void 0 ? _b : 'Error en la peticion';
        this.message = (_c = args.message) !== null && _c !== void 0 ? _c : 'Error en la petición';
        this.statusCode = args.statusCode;
        this.code = (_d = args.code) !== null && _d !== void 0 ? _d : 'err';
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        if (args.code !== undefined) {
            this.code = args.code;
        }
        Error.captureStackTrace(this);
    }
}
exports.AppErrorResponse = AppErrorResponse;
