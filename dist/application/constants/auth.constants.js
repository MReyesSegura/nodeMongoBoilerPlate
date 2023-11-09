"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieOptions = exports.passwordRegex = exports.expiresIn = exports.rounds = void 0;
/* rounds for password */
exports.rounds = 10;
/* expiration for jwt */
exports.expiresIn = 60 * 60 * 24;
/* password regex */
exports.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
/* jwt cookie options */
exports.cookieOptions = {
    httpOnly: true,
    secure: false,
    path: '/api',
    maxAge: exports.expiresIn * 1000
};
