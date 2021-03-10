import {Document} from 'mongoose'
export interface IBookInputEntity {
  name: string
  author: string
  price: number
}
export interface IBookEntity extends IBookInputEntity {
  _id: string
  totalPurchasedCount: number
}
export interface IBookCollectionModel extends IBookEntity, Document {
  _id: any
}