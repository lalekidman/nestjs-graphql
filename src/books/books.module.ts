import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
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
export class BookModule {}