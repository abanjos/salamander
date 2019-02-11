import Joi from 'joi'
import { ProductCategory } from './ProductCategory';

const productSchema = Joi.object().keys({
    id: Joi.number(),
    display_name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    productCategory: Joi.object().type(ProductCategory).required()
})

const Product = class Product {
    constructor({
        id,
        display_name,
        description,
        price,
        productCategory
    })

    {
        this.id = id
        this.display_name = display_name
        this.description = description
        this.price = price
        this.productCategory = productCategory
    }

    validate() {
        return Joi.validate(this, productSchema)
    }
}

export { Product }
