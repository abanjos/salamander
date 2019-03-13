import Joi from 'joi'
import { ProductCategory } from './ProductCategory'
import { ApplicationErrorFactory } from '../../errors'

const productSchema = Joi.object().keys({
  id: Joi.number(),
  display_name: Joi.string().min(1).required(),
  description: Joi.string().required(),
  price: Joi.number().min(0).required(),
  productCategory: Joi.object().type(ProductCategory).required()
})

const Product = class Product {
  constructor({ id, display_name, description, price, productCategory }) {
    this.id = id
    this.display_name = display_name
    this.description = description
    this.price = price
    this.productCategory = productCategory
  }

  validate() {
    const { error, value } = Joi.validate(this, productSchema)

    if(error)
      return { error: ApplicationErrorFactory.createFromJoi(error), value: value }

    return { error, value }
  }
}

export { Product }
