"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMongooseSettings = void 0;
exports.AppMongooseSettings = {
    uri: (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : ''
};
