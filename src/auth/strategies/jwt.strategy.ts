import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt'
import { AuthService } from 'src/auth/auth.service';
import { JWT_SECRET } from '../constants';
import { UserService } from 'src/users/users.services';
@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor (private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpirationDate: true,
      secretOrKey: JWT_SECRET
    })
  }

  public async validate (payload) {
    try {
      const user = await this.userService.getUserByEmail(payload.email)
      if (!user) {
        throw new UnauthorizedException
      }
      return user
    } catch (error) {
      throw error
    }
  }
}