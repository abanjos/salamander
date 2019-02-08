import { Product } from './domain'

const CreateProduct = class CreateProduct {
    constructor({ ProductRepository })
    {
        this.ProductRepository = ProductRepository
    }
    async execute ({ display_name, description, price })
    {
        const product = new Product( display_name, description, price)

        return await this.ProductRepository.add(product)
    }
}

export { CreateProduct }