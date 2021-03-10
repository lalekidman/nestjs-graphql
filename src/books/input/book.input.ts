import { InputType, Field, Float, Int, ID } from 'type-graphql'
import {
  IBookEntity
} from '../interfaces/index'

@InputType()
export class BookGQInput implements IBookEntity {
  @Field(() => ID)
  _id: string
  @Field()
  name: string
  @Field()
  author: string
  @Field(() => Float)
  price: number
  @Field(() => Int)
  totalPurchasedCount: number
}