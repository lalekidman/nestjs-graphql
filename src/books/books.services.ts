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
      const newBook = new this.BookModel({
        _id: uuid(),
        name: bookInput.name,
        author: bookInput.author,
      })
      newBook.save()
      return newBook
    } catch (error) {
      throw error
    }
  }
}
