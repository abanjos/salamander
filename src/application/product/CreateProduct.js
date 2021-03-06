import { Product } from '../../domain/product/Product'

const CreateProduct = class CreateProduct {
  constructor(ProductRepository, ProductCategoryRepository) {
    this.ProductRepository = ProductRepository
    this.ProductCategoryRepository = ProductCategoryRepository
  }

  async execute ({ display_name, description, price, product_category_id }) {
    const result = await this.ProductCategoryRepository.getById(product_category_id)

    if(result.error)
      return { error: result.error, value: null }

    const product = new Product({ display_name, description, price, productCategory: result.value })

    return await this.ProductRepository.add(product)
  }
}

export { CreateProduct }
