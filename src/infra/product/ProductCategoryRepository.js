import { ProductCategory } from '../../domain/product/ProductCategory'

const ProductCategoryRepository = class ProductCategoryRepository {
    constructor({ ProductCategoryModel })

    {
        this.ProductCategoryModel = ProductCategoryModel
    }

    async add(productCategory){

        const { error, value } = productCategory.validate()
        if (error !== null) {
            throw new Error(error)
        }

        const newProductCategory = await this.ProductCategoryModel.create({ 
            display_name: productCategory.display_name
        })

        return new ProductCategory(newProductCategory)
    }
}

export { ProductCategoryRepository }