import { Product } from '../../domain/product/Product'
import { ProductCategory } from '../../domain/product/ProductCategory'


const CreateProduct = class CreateProduct {
  constructor(ProductRepository, ProductCategoryRepository)
  {
    this.ProductRepository = ProductRepository
    this.ProductCategoryRepository = ProductCategoryRepository
  }
  async execute ({ display_name, description, price, product_category_id })
  {
    const productCategory = this.ProductCategoryRepository.getById(product_category_id)

    const product = new Product( display_name, description, price, productCategory)

    return await this.ProductRepository.add(product)
  }
}

export { CreateProduct }
