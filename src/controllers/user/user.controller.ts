import type { Request, Response } from 'express'

import { AppMongooseRepo } from '../../application/repositories/mongoose'

import { userService } from './services/user.service'

import { appErrorResponseHandler, appSuccessResponseHandler } from '../../application/handlers/response'

import type { AppControllerResponse } from '../../application/models/app.response'

class UserController {
  public async createUsers (req: Request, res: Response): Promise<AppControllerResponse> {
    const session = await AppMongooseRepo.startSession()
    const user = req.body.user

    try {
      session.startTransaction()
      const response = await userService.createUsers(user)
      await session.commitTransaction()
      await session.endSession()
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      await session.abortTransaction()
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  public async login (req: Request, res: Response): Promise<AppControllerResponse> {
    const session = await AppMongooseRepo.startSession()
    const body = req.body

    try {
      session.startTransaction()
      const response = await userService.login(body)
      await session.commitTransaction()
      await session.endSession()
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      await session.abortTransaction()
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  
}

export const userController: UserController = new UserController()
