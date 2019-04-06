import { ProductCategoryMapper } from '../../../../src/infra/product_category/ProductCategoryMapper'
import { ProductCategory } from '../../../../src/domain/product/ProductCategory'
import { expect } from 'chai'

describe('Infra :: Product Category :: ProductCategoryMapper', () => {
  context('#toEntity', () => {
    it('maps to ProductCategory', () => {
      const sampleData = {
        dataValues: {
          id: 0,
          display_name: 'Category Name'
        }
      }

      const productCategory = ProductCategoryMapper.toEntity(sampleData)

      expect(productCategory).to.be.instanceOf(ProductCategory)
      expect(productCategory.id).to.be.equal(sampleData.dataValues.id)
      expect(productCategory.display_name).to.be.equal(sampleData.dataValues.display_name)
    })
  })

  context('#toDatabase', () => {
    it('maps to object', () => {
      const category = new ProductCategory({ id: 1, display_name: 'Category Name' })

      const toDatabaseData = ProductCategoryMapper.toDatabase(category)

      expect(toDatabaseData.id).to.be.undefined
      expect(toDatabaseData.display_name).to.be.equal(category.display_name)
    })
  })
})
