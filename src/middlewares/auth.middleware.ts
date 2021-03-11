import { Injectable, NestMiddleware } from "@nestjs/common";
import passport from "passport";
import {Request, Response, NextFunction} from 'express'
const authHandler = (req: Request, res: Response, next: NextFunction) => {
  return (error: any, data: any, errorCode, any) => {
    console.log('error :>> ', error);
    console.log('data :>> ', data);
    console.log('errorCode :>> ', errorCode);
    next()
  }
}
@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('pass@@@@port :>> ', passport);
    return passport.authenticate(
      [
        'jwt'
      ],
      {
        session: false
      },
      authHandler(req, res, next)
    )
    (req, res, next)
  }
}