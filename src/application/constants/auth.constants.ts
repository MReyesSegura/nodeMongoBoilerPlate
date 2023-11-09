import type { CookieOptions } from 'express'

/* rounds for password */
export const rounds: number = 10

/* expiration for jwt */
export const expiresIn: number = 60 * 60 * 24

/* password regex */
export const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/

/* jwt cookie options */
export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: false,
  path: '/api',
  maxAge: expiresIn * 1000
}

