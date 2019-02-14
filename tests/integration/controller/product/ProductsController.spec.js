import { product as ProductModel, sequelize, product_category as ProductCategoryModel } from '../../../../src/infra/database/models'
import { ProductsController } from '../../../../src/controller/product/ProductsController'
import { ProductRepository } from '../../../../src/infra/product/ProductRepository'
import { ProductCategoryRepository } from '../../../../src/infra/product/ProductCategoryRepository'
import { CreateProduct } from '../../../../src/application/product/CreateProduct'

describe('Controller :: Product :: ProductController', () => {

  let defaultCategory

  beforeEach( async () => {
    sequelize.truncate({ cascade: true })

    defaultCategory = await ProductCategoryModel.create({ display_name: 'Padrão' })
  })

  describe('#create', () => {
    test('Create a product.', async () => {
      const productCategoryRepository = new ProductCategoryRepository(ProductCategoryModel)
      const productRepository = new ProductRepository(ProductModel)

      const context = {
        request: {
          body: {
            display_name: 'Detergente',
            description: 'Sabão líquido para lavar louças.',
            price: 900,
            product_category_id: defaultCategory.id
          }
        },
        createProduct: new CreateProduct(productRepository, productCategoryRepository)
      }
      const result = await ProductsController.create(context)

      expect(result.id).toBeDefined()
      expect(result.display_name).toBe('Detergente')
      expect(result.description).toBe('Sabão líquido para lavar louças.')
      expect(result.price).toBe(900)
    })
  })
})
