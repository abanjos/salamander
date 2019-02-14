import { ProductRepository } from '../../../../src/infra/product/ProductRepository'
import { product as ProductModel, sequelize, product_category as ProductCategoryModel } from '../../../../src/infra/database/models'
import { Product } from '../../../../src/domain/product/Product'
import { ProductCategoryMapper } from '../../../../src/infra/product/ProductCategoryMapper'


describe('Infra :: Product :: ProductRepository', () => {

  let repository, defaultCategory

  beforeEach( async () => {
    repository = new ProductRepository(ProductModel)
    sequelize.truncate({ cascade: true })

    defaultCategory = await ProductCategoryModel.create({ display_name: 'Padrão' })
  })

  describe('#add', () => {
    test('When product is valid persists the product.', async () => {

      const productCategory = ProductCategoryMapper.toEntity( defaultCategory )
      const product = new Product({ display_name: 'Melancia', description: 'Uma melancia.', price: 900, productCategory })

      const productValidationResult = product.validate()
      expect(productValidationResult.error).toBeNull()

      const productCategoryValidationResult = productCategory.validate()
      expect(productCategoryValidationResult.error).toBeNull()

      const created = await repository.add(product)

      expect(created.id).toBeDefined()
    })
  })
})
