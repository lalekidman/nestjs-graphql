import {Schema, SchemaTypeOptions} from 'mongoose'
import { IUserEntity } from './users.interfaces'

const ICollectionProperties = <Record<keyof IUserEntity, SchemaTypeOptions<Object>>>{
  _id: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
}
export const UserSchema = new Schema(ICollectionProperties)