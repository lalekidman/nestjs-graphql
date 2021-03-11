import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/users.services';
import { JwtService } from '@nestjs/jwt'
import { IUserEntity } from 'src/users/users.interfaces';
import { JWT_SECRET } from './constants';
@Injectable()
export class AuthService {

  constructor (
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  getHello(): string {
    return 'Hello world';
  }

  public async validate(email: string, password: string) {
    try {
      const user = await this.userService.getUserByEmail(email)
      if (!user) {
        return null
      }
      if (!(user.password === password)) {
        throw UnauthorizedException
      }
      return user
    } catch (error) {
      throw error
    }
  }
  public async login(user: IUserEntity) {
    try {
      const payload = {
        email: user.email,
        sub: user._id
      }
      return {
        accessToken: this.jwtService.sign(payload)
      }
    } catch (error) {
      throw error
    }
  }
  public async verify(accessToken: string) {
    try {
      const decoded = this.jwtService.verify(accessToken, {
        secret: JWT_SECRET
      })

      const user = await this.userService.getUserByEmail(decoded.email)
      if (!user) {
        throw new Error('Unable to get the user from decoded token.')
      }
      return user
    } catch (error) {
      throw error
    }
  }
}
