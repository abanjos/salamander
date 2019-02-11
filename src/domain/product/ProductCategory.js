import Joi from 'joi'

const productCategorySchema = Joi.object().keys({
    id: Joi.number().optional(),
    display_name: Joi.string().min(2).required(),
})

const ProductCategory = class ProductCategory {

    validate() {
        return Joi.validate(this, productCategorySchema)
    }

    constructor({
        id,
        display_name
    })

    {
        this.id = id
        this.display_name = display_name
    }
}

export { ProductCategory }
