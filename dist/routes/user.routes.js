"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const route_1 = require("./models/route");
const user_controller_1 = require("../controllers/user/user.controller");
const auth_middleware_1 = require("../application/middlewares/auth.middleware");
class UserRoutes extends route_1.ServerRouter {
    constructor() {
        super();
        this.config();
    }
    config() {
        this.router.post('/', user_controller_1.userController.createUsers);
        this.router.post('/login', auth_middleware_1.userMiddleware, user_controller_1.userController.login);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
