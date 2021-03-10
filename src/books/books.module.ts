import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerMiddleware } from "src/middlewares/logger.middleware";
import { BooksController } from './books.controller' 
import { BookResolver } from "./books.resolver";
import { BookSchema } from "./books.schema";
import { BookService } from './books.services' 
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'books',
        schema: BookSchema
      }
    ])
  ],
  controllers: [BooksController],
  providers: [BookService, BookResolver],
})
export class BookModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({
        path: 'books',
        method: RequestMethod.ALL
      })
  }
}