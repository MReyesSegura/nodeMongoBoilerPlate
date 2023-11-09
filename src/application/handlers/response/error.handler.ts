import { AppErrorResponse, AppResponse } from '../../models/app.response'
import type { IErrorHandlerResponse} from './dtos/error-handler.dto'
import { TokenExpiredError } from 'jsonwebtoken'

export function appErrorResponseHandler (error: unknown | any): IErrorHandlerResponse {
  const result = new AppResponse()

  if (error instanceof AppErrorResponse) {
    result.message = error.message ?? 'Error del server'
    result.code = error.code ?? null
    return { statusCode: error.statusCode, error: result }
  }

  if (error instanceof TokenExpiredError) {
    return { statusCode: 401, code: 'ACCESS_TOKEN_EXPIRED', error }
  }

  result.message = String(error)
  return { statusCode: 500, error: result }
}
