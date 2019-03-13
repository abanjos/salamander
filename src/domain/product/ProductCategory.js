import Joi from 'joi'
import { ApplicationErrorFactory } from '../../errors'

const productCategorySchema = Joi.object().keys({
  id: Joi.number().optional(),
  display_name: Joi.string().min(2).required(),
})

const ProductCategory = class ProductCategory {
  constructor({ id, display_name }) {
    this.id = id
    this.display_name = display_name
  }

  validate() {
    const { error, value } = Joi.validate(this, productCategorySchema)

    if(error)
      return { error: ApplicationErrorFactory.createFromJoi(error), value: value }

    return { error, value }
  }
}

export { ProductCategory }
