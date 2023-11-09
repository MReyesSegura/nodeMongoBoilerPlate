import { Schema } from '../../../mongoose'
/* consts */
import { passwordRegex } from '../../../../constants/auth.constants'
/* dtos */
import { EAuthAttemptErrors } from '../../../../dtos/auth.dto'
import { type IUser, type TUserModel } from './dtos/user.dto'

export const UserSchema = new Schema<IUser, TUserModel>({
  name: { type: String, required: true, trim: true },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value: string) {
        return passwordRegex.test(value)
      },
      message: EAuthAttemptErrors.INVALID_PASSWORD_FORMAT
    },
  },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() }
})
