"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateUserToken = exports.comparePassword = exports.generatePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/* consts */
const auth_constants_1 = require("../constants/auth.constants");
function generatePassword(password) {
    const salt = bcrypt_1.default.genSaltSync(auth_constants_1.rounds);
    const hash = bcrypt_1.default.hashSync(password, salt);
    return hash;
}
exports.generatePassword = generatePassword;
function comparePassword(password, hashPassword) {
    return bcrypt_1.default.compareSync(password, hashPassword);
}
exports.comparePassword = comparePassword;
function generateUserToken(payload) {
    var _a;
    const token = jsonwebtoken_1.default.sign(payload, (_a = process.env.PROFILES_JWT_TOKEN) !== null && _a !== void 0 ? _a : '', { expiresIn: auth_constants_1.expiresIn });
    return { token, expiresIn: auth_constants_1.expiresIn };
}
exports.generateUserToken = generateUserToken;
function verifyToken(token) {
    var _a;
    return jsonwebtoken_1.default.verify(token, (_a = process.env.PROFILES_JWT_TOKEN) !== null && _a !== void 0 ? _a : '');
}
exports.verifyToken = verifyToken;
