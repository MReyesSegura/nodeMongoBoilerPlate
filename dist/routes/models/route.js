"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRouter = void 0;
const express_1 = require("express");
class ServerRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
}
exports.ServerRouter = ServerRouter;
