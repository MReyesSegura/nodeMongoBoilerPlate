import { type Model, type Types } from 'mongoose'

export interface IUser {
  _id: Types.ObjectId
  name: string
  password: string
  createdAt?: Date
  updatedAt?: Date
  active?: boolean
}

export type TUserModel = Model<IUser, Record<string, unknown>>
