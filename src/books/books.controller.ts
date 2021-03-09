import { Controller, Get } from '@nestjs/common';
import {BookService} from './books.services'
@Controller('books')
export class BooksController {
  constructor (private readonly bookService: BookService) {}
  @Get('/')
  getHello(): string {
    return this.bookService.getHello();
  }
}
