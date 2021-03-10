// import { InputType, Field, Float, Int, ID } from 'type-graphql'
import {InputType, Field, Float, Int, ID} from '@nestjs/graphql'
import { IsOptional } from 'class-validator'
import {
  IBookInputEntity
} from '../interfaces/index'

@InputType()
export class BookGQInput implements IBookInputEntity {
  @Field()
  name: string
  @Field({nullable: true, })
  author: string
  @Field(() => Float)
  price: number
}