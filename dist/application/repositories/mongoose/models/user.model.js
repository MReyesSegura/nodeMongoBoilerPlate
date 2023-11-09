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
exports.UserModel = void 0;
const mongoose_1 = require("../../mongoose");
const user_schema_1 = require("./schemas/user.schema");
user_schema_1.UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.updatedAt = new Date(Date.now());
        next();
    });
});
user_schema_1.UserSchema.post('save', function (doc) {
    console.log(`[User][${String(doc._id)}] User data was created /updated successfully: ${JSON.stringify(doc.toJSON())}`);
});
exports.UserModel = (0, mongoose_1.model)('user', user_schema_1.UserSchema);
