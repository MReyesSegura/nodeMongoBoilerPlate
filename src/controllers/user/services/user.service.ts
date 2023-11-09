import { UserModel } from '../../../application/repositories/mongoose/models/user.model'
import { AppErrorResponse } from '../../../application/models/app.response'


class UserService {
  async createUsers (user: object): Promise<typeof allUsers> {
    const allUsers = await UserModel.find({ active: true })
    return allUsers
  }

  async login (user: object): Promise<typeof allUsers> {
    const allUsers = await UserModel.find({ active: true })

    return allUsers
  }

}

export const userService: UserService = new UserService()
