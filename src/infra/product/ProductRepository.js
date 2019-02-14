import { ProductMapper } from './ProductMapper'

const ProductRepository = class ProductRepository {
  constructor(ProductModel)

  {
    this.ProductModel = ProductModel
  }

  async add(product){
    const productValidationResult = product.validate()
    if (productValidationResult.error !== null) {
      throw new Error(productValidationResult.error)
    }

    const productCategoryValidationResult = product.productCategory.validate()
    if (productCategoryValidationResult.error !== null) {
      throw new Error(productCategoryValidationResult.error)
    }

    try {
      const newProduct = await this.ProductModel.create({
        display_name: product.display_name,
        description: product.description,
        price: product.price,
        product_category_id: product.productCategory.id
      })

      const entity = ProductMapper.toEntity(newProduct)
      entity.productCategory = product.productCategory
      return entity
    }
    catch(err) {
      console.log(err)
    }
  }
}

export { ProductRepository }

