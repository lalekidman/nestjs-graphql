import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local'
import { AuthService } from 'src/auth/auth.service';
import { JWT_SECRET } from '../constants';
import { UserService } from 'src/users/users.services';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (private readonly authService: AuthService) {
    super({
      usernameField: 'email'
    })
  }

  public async validate (username: string, password: string) {
    try {
      console.log('xxxxxxxxxxxxxxxpayl3333333333333x333oad :>> ', username);
      console.log('xxxxzzzzzzzzzzzzzzzzzzzzxxxxxxxxxxxpayl3333333333333333oad :>> ', password);
      const user = await this.authService.validate(username, password)
      if (!user) {
        throw new UnauthorizedException
      }
      return user
    } catch (error) {
      throw error
    }
  }
}