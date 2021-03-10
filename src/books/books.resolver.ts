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
    return this.bookService.saveBook(input)
  }
  @Mutation(() => BookGQuery)
  public async updateBook (@Args('bookId') bookId: string, @Args('input') input: BookGQInput) {
    return this.bookService.updateBook(bookId, input)
  }
  @Mutation(() => BookGQuery)
  public async removeBook (@Args('bookId') bookId: string) {
    return this.bookService.removeBook(bookId)
  }
}