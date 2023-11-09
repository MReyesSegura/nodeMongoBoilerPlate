/* eslint-disable @typescript-eslint/no-misused-promises */
import { ServerRouter } from './models/route'
/* dtos */
import { type RequestHandler } from 'express'
import { userController } from '../controllers/user/user.controller'

import { userMiddleware } from '../application/middlewares/auth.middleware'

class UserRoutes extends ServerRouter {
  constructor () {
    super()
    this.config()
  }

  config (): void {
    this.router.post('/', userController.createUsers as RequestHandler)
    this.router.post('/login', userMiddleware, userController.login as RequestHandler)
  }
}

const userRoutes: UserRoutes = new UserRoutes()
export default userRoutes.router
