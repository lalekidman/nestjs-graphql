import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  LocalAuthGuard
} from '../auth/guards/local-auth.guard'
@Controller('auth')
export class AuthController {

  constructor (private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post()
  public login (@Request() req) {
    return this.authService.login(req.user)
  }
}