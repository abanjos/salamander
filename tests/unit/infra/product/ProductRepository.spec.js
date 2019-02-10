import { ProductRepository } from '../../../../src/infra/product/ProductRepository'
import { product as ProductModel, sequelize } from '../../../../src/infra/database/models'
import { Product } from '../../../../src/domain/product/Product'


describe('Infra :: Product :: ProductRepository', () => {
    
    let repository, defaultCategory

    beforeEach(() => {
        repository = new ProductRepository({ ProductModel })
        sequelize.truncate({ cascade: true })

        defaultCategory = sequelize.product_category.create({ display_name: 'Padrão' })
    })

    describe('#add', () => {
        test('When product is valid persists the product.', () => {
            
        })
    })
})