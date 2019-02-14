import { ProductCategory } from '../../domain/product/ProductCategory'
import { ProductCategoryMapper } from './ProductCategoryMapper'

const ProductCategoryRepository = class ProductCategoryRepository {
  constructor(ProductCategoryModel) {
    this.ProductCategoryModel = ProductCategoryModel
  }

  async getById(id) {
    const productCategory = await this.ProductCategoryModel.findByPk(id)

    return ProductCategoryMapper.toEntity(productCategory)
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
