import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('#@@@@@@Middleware Hit!');
    console.log('req.headers :>> ', req.headers);
    console.log('req.path :>> ', req.path);
    console.log('req.ip :>> ', req.ip);
    next()
  }
}