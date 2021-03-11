import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JWT_SECRET } from './constants';
import { JWTStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    UserModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60
      }
    })
  ],
  providers: [
    AuthService,
    JWTStrategy,
    LocalStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
