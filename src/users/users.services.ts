import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserEntity, IUserEntityCollectionModel, IUserInputEntity } from './users.interfaces';
import {v4 as uuid} from 'uuid'

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly UserModel: Model<IUserEntityCollectionModel>) {}

  public getUsers(): Promise<IUserEntity[]> {
    try {
      return this.UserModel.find()
        .exec()
    } catch (error) {
      throw error
    }
  }
  public async saveUser(userInput: IUserInputEntity): Promise<IUserEntity> {
    try {
      const newUser = new this.UserModel({
        ...userInput,
        _id: uuid()
      })
      newUser.save()
      return newUser
    } catch (error) {
      throw error
    }
  }
  public async getUserByEmail(email: string) {
    try {
      const user = await this.UserModel.findOne({
        email: email
      })
      return user
    } catch (error) {
      throw error
    }
  }
  public async updateUser(userId: string, userInput: IUserInputEntity): Promise<IUserEntity> {
    try {
      const {
        email,
        firstName,
        lastName,
        password
      } = userInput
      const updatedBook = await this.UserModel.findOne({
        _id: userId
      })
      updatedBook.set(userInput)
      return updatedBook.save()
    } catch (error) {
      throw error
    }
  }
  public async removeUser(userId: string): Promise<IUserEntity> {
    try {
      const removedUser = await this.UserModel.findOne({
        _id: userId
      })
      if (!removedUser) {
        throw new Error('No data found.')
      }
      return removedUser.remove()
    } catch (error) {
      throw error
    }
  }
}
