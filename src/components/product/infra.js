import { Sequelize, DataTypes } from 'sequelize'
import { Product } from './domain'

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://salamander:senhasenha@localhost:5432/salamanderdev'
const sequelizeOptions = { operatorsAliases: false }
const sequelize = new Sequelize(DATABASE_URL, { sequelizeOptions })

const ProductModel = sequelize.define('product', {
    display_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
})

const ProductCategoryModel = sequelize.define('product_category', {
    display_name: DataTypes.STRING
})

ProductModel.belongsTo(ProductCategoryModel)

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

export { ProductModel, ProductCategoryModel, ProductRepository }

