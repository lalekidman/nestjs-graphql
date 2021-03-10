import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {BookService} from './books.services'
import { IBookInputEntity } from './interfaces';
@Controller('books')
export class BooksController {
  constructor (private readonly bookService: BookService) {}
  @Get()
  public getBooks() {
    console.log('objecxxxt :>> ');
    return this.bookService.getBooks();
  }
  @Post('/')
  public createBook(@Body() bookInput: IBookInputEntity) {
    console.log('bookInput :>> ', bookInput);
    return this.bookService.saveBook(bookInput);
  }
  @Patch('/:bookId')
  public updateBook(@Param('bookId') bookId: string, @Body() bookInput: IBookInputEntity) {
    console.log('bookId :>> ', bookId);
    console.log('bookInput :>> ', bookInput);
    return this.bookService.updateBook(bookId, bookInput)
  }
  @Delete('/:bookId')
  public removeBook(@Param('bookId') bookId: string) {
    console.log('bookId :>> ', bookId);
    return this.bookService.removeBook(bookId)
  }
}
