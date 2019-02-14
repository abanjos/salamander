import { ProductCategory } from '../../domain/product/ProductCategory'

const ProductCategoryMapper = {
    toEntity ({dataValues}) {
        const { id, display_name } = dataValues
        return new ProductCategory ({ id, display_name })
    },

    toDatabase ({dataValues}) {
        const { display_name } = dataValues
        return { display_name }
    }
}

export { ProductCategoryMapper }

