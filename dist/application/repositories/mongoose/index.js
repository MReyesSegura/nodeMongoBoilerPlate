"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = exports.SchemaTypes = exports.Model = exports.Types = exports.model = exports.Schema = exports.AppMongooseRepo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/* settings */
const mongoose_settings_1 = require("./mongoose.settings");
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(mongoose_settings_1.AppMongooseSettings.uri).catch((e) => {
    console.log(String(e));
});
/* client repo */
exports.AppMongooseRepo = mongoose_1.default.connection;
exports.AppMongooseRepo.on('error', (e) => { console.log(String(e)); });
exports.AppMongooseRepo.on('open', () => { console.log('db connection success!'); });
/* exports */
var mongoose_2 = require("mongoose");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return mongoose_2.Schema; } });
Object.defineProperty(exports, "model", { enumerable: true, get: function () { return mongoose_2.model; } });
Object.defineProperty(exports, "Types", { enumerable: true, get: function () { return mongoose_2.Types; } });
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return mongoose_2.Model; } });
Object.defineProperty(exports, "SchemaTypes", { enumerable: true, get: function () { return mongoose_2.SchemaTypes; } });
Object.defineProperty(exports, "Document", { enumerable: true, get: function () { return mongoose_2.Document; } });
