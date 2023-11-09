import { type Request, type Response, type NextFunction } from 'express'
/* handlers */
import { appErrorResponseHandler } from '../handlers/response'
/* models */
import { AppErrorResponse } from '../models/app.response'
/* utils */
import { verifyToken } from '../utils/auth.util'
/* dtos */
import { type IUserPayload } from '../dtos/auth.dto'


export async function userMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization
    const sessionToken = authHeader?.split?.(' ')?.[1] ?? false

    if (typeof sessionToken === 'undefined' || sessionToken === false) {
      throw new AppErrorResponse({
        statusCode: 403,
        name: 'Se requiere un token de acceso válido',
        description: 'Se requiere un token de acceso válido',
        isOperational: true
      })
    }

    const verified = verifyToken<IUserPayload>(sessionToken)

    res.locals.user = verified
    next()
  } catch (error) {
    const { statusCode } = appErrorResponseHandler(error)
    res.status(statusCode).json({ error })
  }
}

