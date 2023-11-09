import { model } from '../../mongoose'

import { UserSchema } from './schemas/user.schema'

import { type IUser, type TUserModel } from './schemas/dtos/user.dto'



UserSchema.pre('save', async function (next: any) {
  this.updatedAt = new Date(Date.now())
  next()
})

UserSchema.post('save', function (doc: any) {
  console.log(`[User][${String(doc._id)}] User data was created /updated successfully: ${JSON.stringify(doc.toJSON())}`)
})

export const UserModel = model<IUser, TUserModel>('user', UserSchema)
