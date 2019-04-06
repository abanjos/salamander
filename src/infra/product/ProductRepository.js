import { ProductMapper } from './ProductMapper'

const ProductRepository = class ProductRepository {
  constructor(ProductModel) {
    this.ProductModel = ProductModel
  }

  async add(product){
    const { error } = product.validate()

    if(error)
      return { error, value: null }

    try {
      const newProduct = await this.ProductModel.create(ProductMapper.toDatabase(product))

      const entity = ProductMapper.toEntity(newProduct)

      entity.productCategory = product.productCategory

      return { error: false, value: entity }
    }
    catch(err) {
      return { error: err, value: null }
    }
  }

  async getAll() {
    try {
      const productsData = await this.ProductModel.findAll({ attributes: ['id', 'display_name', 'price', 'description']})
      const productsEntities = productsData.map(ProductMapper.toEntity)

      return { error: false, value: productsEntities }
    }
    catch(err) {
      return { error: err, value: null }
    }
  }
}

export { ProductRepository }

