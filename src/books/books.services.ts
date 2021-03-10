import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBookCollectionModel, IBookEntity, IBookInputEntity } from './interfaces';
import {v4 as uuid} from 'uuid'

@Injectable()
export class BookService {
  constructor(@InjectModel('books') private readonly BookModel: Model<IBookCollectionModel>) {}

  public getBooks(): Promise<IBookEntity[]> {
    try {
      return this.BookModel.find({}).exec()
    } catch (error) {
      throw error
    }
  }
  public async saveBook(bookInput: IBookInputEntity): Promise<IBookEntity> {
    try {
      const bookEntity = {
        _id: uuid(),
        name: bookInput.name,
        author: bookInput.author,
      }
      const newBook = new this.BookModel(bookEntity)
      newBook.save()
      return newBook
    } catch (error) {
      throw error
    }
  }
  public async updateBook(bookId: string, bookInput: IBookInputEntity): Promise<IBookEntity> {
    try {
      const {
        author = '',
        name,
        price
      } = bookInput
      console.log('bookInput :>> ', bookInput);
      const updatedBook = await this.BookModel.findOne({
        _id: bookId
      })

      updatedBook.set(bookInput)
      return updatedBook.save()
    } catch (error) {
      throw error
    }
  }
  public async removeBook(bookId: string): Promise<IBookEntity> {
    try {
      const removedBook = await this.BookModel.findOne({
        _id: bookId
      })
      if (!removedBook) {
        throw new Error('No data found.')
      }
      return removedBook
      // return removedBook.remove()
    } catch (error) {
      throw error
    }
  }
}
