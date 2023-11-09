"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
/* aliases an environment variables */
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const client_middleware_1 = require("./application/middlewares/client.middleware");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
/* app class */
class AppServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = http_1.default.createServer(this.app);
        /* init methods */
        this.config();
        this.routes();
    }
    config() {
        var _a;
        this.app.set('port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5050);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(client_middleware_1.clientMiddleware);
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, express_session_1.default)({
            secret: '123456@@@',
            resave: true,
            saveUninitialized: true
        }));
    }
    routes() {
        this.app.use('/assets', express_1.default.static(path_1.default.resolve(__dirname, '../public')));
        this.app.use('/api/user', user_routes_1.default);
    }
    start() {
        this.server.listen(this.app.get('port'), () => {
            console.log(`Server listening on \x1b[34mhttp://localhost:${this.app.get('port')}\x1b[0m`);
        });
    }
}
exports.AppServer = AppServer;
