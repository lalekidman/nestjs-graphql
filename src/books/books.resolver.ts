import {
  Resolver,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql'
import { BookService } from './books.services'
import {BookGQInput} from './input/book.input'
import {BookGQuery} from './object-type/books.object-type'
@Resolver()
export class BookResolver {

  constructor( private readonly bookService: BookService) {}
  
  @Query(() => [BookGQuery])
  public async getBooks () {
    return this.bookService.getBooks()
  }
  @Mutation(() => BookGQuery)
  public async createBook (@Args('input') input: BookGQInput) {
    console.log('input :>> ', input);
    return this.bookService.saveBook(input)
  }
}