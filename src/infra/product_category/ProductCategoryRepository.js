import { ProductCategoryMapper } from './ProductCategoryMapper'
import { ApplicationErrorFactory } from '../../errors'

const ProductCategoryRepository = class ProductCategoryRepository {
  constructor(ProductCategoryModel) {
    this.ProductCategoryModel = ProductCategoryModel
  }

  async getById(id) {
    const category = await this.ProductCategoryModel.findByPk(id)

    if(category)
      return { error: false, value: ProductCategoryMapper.toEntity(category) }

    return {
      error: ApplicationErrorFactory.createFromCode('ERR_RECORD_NOT_FOUND', `Category with id ${id} doesn't exist`, { context: { id: id } }),
      value: null
    }
  }

  async add(productCategory){
    const { error } = productCategory.validate()

    if(error)
      return { error, value: null }

    try {
      const newProductCategory = await this.ProductCategoryModel.create(ProductCategoryMapper.toDatabase(productCategory))

      return { error: false, value: ProductCategoryMapper.toEntity(newProductCategory) }
    }
    catch(err) {
      return { error: err, value: null }
    }
  }
}

export { ProductCategoryRepository }
