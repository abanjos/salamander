import { Product } from '../../domain/product/Product'

const ProductMapper = {
  toEntity ({ dataValues }) {
    const { id, display_name, description, price, productCategory } = dataValues
    return new Product ({ id, display_name, description, price, productCategory })
  },

  toDatabase (product) {
    const { display_name, description, price, productCategory } = product
    return { display_name, description, price, product_category_id: productCategory.id }
  }
}

export { ProductMapper }


