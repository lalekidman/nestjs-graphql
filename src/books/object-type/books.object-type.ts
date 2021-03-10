import { ObjectType, Field, Float, Int, ID } from 'type-graphql'
import {
  IBookEntity
} from '../interfaces/index'

@ObjectType()
export class BookGQuery implements IBookEntity {
  @Field()
  readonly _id: string
  @Field()
  readonly name: string
  @Field()
  readonly author: string
  @Field()
  readonly price: number
  @Field()
  readonly totalPurchasedCount: number
}