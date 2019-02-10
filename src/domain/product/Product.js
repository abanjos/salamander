import Joi from 'joi'

const productSchema = Joi.object().keys({
    id: Joi.number(),
    display_name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required()
})

const Product = class Product {
    constructor({
        id,
        display_name,
        description,
        price
    })

    {
        this.id = id
        this.display_name = display_name
        this.description = description
        this.price = price
    }

    validate() {
        return Joi.validate(this, productSchema)
    }
}

export { Product }
