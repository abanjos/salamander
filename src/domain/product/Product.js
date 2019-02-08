import Joi from 'joi'

const productSchema = Joi.object().keys({
    id: Joi.number().required(),
    display_name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required()
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
        Joi.validate(this, productSchema)
    }
}

export { Product }
