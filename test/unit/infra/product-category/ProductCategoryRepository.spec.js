import { ProductCategoryRepository } from '../../../../src/infra/product_category/ProductCategoryRepository'
import { product_category as ProductCategoryModel, sequelize } from '../../../../src/infra/database/models'
import { ProductCategory } from '../../../../src/domain/product/ProductCategory'
import { expect } from 'chai'

describe('Infra :: Product Category :: ProductCategoryRepository',  () => {
  beforeEach(async () => {
    await sequelize.truncate({cascade: true})
  })

  context('when data is valid', () => {
    it('persists the data', async () => {
      const repository = new ProductCategoryRepository(ProductCategoryModel)

      const validData = { display_name: 'Category Name' }
      const category = new ProductCategory(validData)
      const { error, value } = await repository.add(category)

      expect(error).to.be.false
      expect(value.id).not.to.be.undefined
      expect(value.display_name).to.be.equal(validData.display_name)
    })
  })

  context('when data is invalid', () => {
    it('does not persists the data', async () => {
      const repository = new ProductCategoryRepository(ProductCategoryModel)
      const invalidData = { display_name: '' }

      const invalidCategory = new ProductCategory(invalidData)
      const { error, value } = await repository.add(invalidCategory)

      expect(error).not.to.be.false
      expect(value).to.be.null
    })
  })
})
