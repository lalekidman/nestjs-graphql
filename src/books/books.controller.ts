import { Controller, Get } from '@nestjs/common';
import {BookService} from './books.services'
@Controller('books')
export class BooksController {
  @Get('/')
  getHello(): string {
    return new BookService().getHello();
  }
}
