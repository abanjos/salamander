import { Sequelize, DataTypes } from 'sequelize'
import { Product } from '../../domain/product/Product'

const ProductRepository = class ProductRepository {
    constructor({ ProductModel })

    {
        this.ProductModel = ProductModel
    }

    async add(product){
        const newProduct = await this.ProductModel.create({ 
            display_name: product.display_name,
            description: product.description,
            price: product.price             
        })

        return new Product(newProduct)
    }
}

export { ProductRepository }

