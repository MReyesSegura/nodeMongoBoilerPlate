import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
/* consts */
import { rounds, expiresIn } from '../constants/auth.constants'
/* dtos */
import { type IUserPayload, type IAccountToken } from '../dtos/auth.dto'

export function generatePassword (password: string): string {
  const salt: string = bcrypt.genSaltSync(rounds)
  const hash: string = bcrypt.hashSync(password, salt)
  return hash
}

export function comparePassword (password: string, hashPassword: string): boolean {
  return bcrypt.compareSync(password, hashPassword)
}

export function generateUserToken (payload: IUserPayload): IAccountToken {
  const token: string = jwt.sign(payload, process.env.PROFILES_JWT_TOKEN ?? '', { expiresIn })
  return { token, expiresIn }
}

export function verifyToken<T> (token: string): T {
  return jwt.verify(token, process.env.PROFILES_JWT_TOKEN ?? '') as T
}


