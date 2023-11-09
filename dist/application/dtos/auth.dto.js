"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAuthAttemptErrors = void 0;
var EAuthAttemptErrors;
(function (EAuthAttemptErrors) {
    EAuthAttemptErrors["INVALID_PASSWORD_FORMAT"] = "La contrase\u00F1a no contiene cumple con las siguientes reglas: [1 may\u00FAscula, 1 min\u00FAscula, 1 s\u00EDmbolo, m\u00EDnimo de 8 caract\u00E9res]";
    EAuthAttemptErrors["MAX_LOGIN_ATTEMPTS"] = "Has intentado iniciar sesi\u00F3n varias veces. Prueba nuevamente en 30 minutos.";
})(EAuthAttemptErrors || (exports.EAuthAttemptErrors = EAuthAttemptErrors = {}));
