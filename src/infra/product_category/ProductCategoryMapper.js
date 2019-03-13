import { ProductCategory } from '../../domain/product/ProductCategory'

const ProductCategoryMapper = {
  toEntity ({dataValues}) {
    const { id, display_name } = dataValues
    return new ProductCategory({ id, display_name })
  },

  toDatabase (category) {
    const { display_name } = category
    return { display_name }
  }
}

export { ProductCategoryMapper }

