import {Document} from 'mongoose'
export interface IUserInputEntity {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface IUserEntity extends IUserInputEntity {
  _id: string
}

export interface IUserEntityCollectionModel extends IUserEntity, Document {
  _id: any
}