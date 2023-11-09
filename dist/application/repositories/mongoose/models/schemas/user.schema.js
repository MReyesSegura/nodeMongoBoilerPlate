"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("../../../mongoose");
/* consts */
const auth_constants_1 = require("../../../../constants/auth.constants");
/* dtos */
const auth_dto_1 = require("../../../../dtos/auth.dto");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                return auth_constants_1.passwordRegex.test(value);
            },
            message: auth_dto_1.EAuthAttemptErrors.INVALID_PASSWORD_FORMAT
        },
    },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: () => Date.now(), immutable: true },
    updatedAt: { type: Date, default: () => Date.now() }
});
