import { Module } from "@nestjs/common";
import { BooksController } from './books.controller' 
import { BookService } from './books.services' 
@Module({
  controllers: [BooksController],
  providers: [BookService],
})
export class BookModule {}