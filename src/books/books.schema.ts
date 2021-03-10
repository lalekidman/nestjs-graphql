import {Schema} from 'mongoose'
export const BookSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ``
  },
  price: {
    type: Number,
    default: 0
  },
  totalPurchasedCount: {
    type: Number,
    default: 0
  },
})