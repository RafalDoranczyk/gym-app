import { EntityRepository, Repository } from 'typeorm'
import { injectable } from 'inversify'
import User from '../entities/User'
import * as bcrypt from 'bcryptjs'
import { SignupUserInterface } from '../api/auth/interfaces'

@injectable()
@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  async createUser(credentials : SignupUserInterface):Promise<User> {
    const { username, email, password } = credentials
    const hashedPassword = await this.hashPassword(password)
    const user = this
      .create({
        username,
        email,
        password: hashedPassword,
      })
    await this.save(user)

    return user
  }

  async hashPassword(password: string):Promise<string> {
    password = await bcrypt.hash(password, 8)

    return password
  }

  async checkIfPasswordIsValid(password: string, password2: string):Promise<boolean> {
    return await bcrypt.compare(password, password2)
  }
}
