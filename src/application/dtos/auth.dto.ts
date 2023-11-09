import { type Types } from '../repositories/mongoose'

export enum EAuthAttemptErrors {
  INVALID_PASSWORD_FORMAT = 'La contraseña no contiene cumple con las siguientes reglas: [1 mayúscula, 1 minúscula, 1 símbolo, mínimo de 8 caractéres]',
  MAX_LOGIN_ATTEMPTS = 'Has intentado iniciar sesión varias veces. Prueba nuevamente en 30 minutos.',
}


export interface IAccountToken {
  token: string
  expiresIn: number
}

export interface IUserPayload {
  _id: Types.ObjectId
  name: string
}

