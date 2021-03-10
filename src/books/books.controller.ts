import { Controller, Get } from '@nestjs/common';
import {BookService} from './books.services'
@Controller('books')
export class BooksController {
  constructor (private readonly bookService: BookService) {}
  @Get('/')
  getHello() {
    return this.bookService.getBooks();
  }
}
