import { expect } from 'chai'
import { product as ProductModel, product_category as ProductCategoryModel, sequelize } from '../../../../src/infra/database/models'
import { ProductRepository } from '../../../../src/infra/product/ProductRepository'
import { ProductCategoryMapper } from '../../../../src/infra/product_category/ProductCategoryMapper'
import { Product } from '../../../../src/domain/product/Product'

describe('Infra :: Product :: ProductRepository', () => {
  beforeEach(async () => {
    await sequelize.truncate({cascade: true})
  })

  it('persists the data when data is valid', async () => {
    const repository = new ProductRepository(ProductModel)
    const category = await ProductCategoryModel.create({ display_name: 'A category'})
    const productCategory = ProductCategoryMapper.toEntity(category)

    const product = new Product({ display_name: 'A product', description: 'Some description for product', price: 1000, productCategory: productCategory })

    const { error, value } = await repository.add(product)
    expect(error).to.be.false
    expect(value).not.to.be.null
    expect(value.id).not.to.be.undefined
    expect(value.display_name).to.equal(product.display_name)
    expect(value.description).to.equal(product.description)
    expect(value.price).to.equal(product.price)
    expect(value.productCategory.id).to.equal(productCategory.id)
  })

  it('fails when data is invalid', async () => {
    const repository = new ProductRepository(ProductModel)
    const category = await ProductCategoryModel.create({ display_name: 'A category'})
    const productCategory = ProductCategoryMapper.toEntity(category)

    const invalidProduct = new Product({ display_name: '', description: 'Some description for product', price: 1000, productCategory: productCategory })

    expect(() => {
      const { error } = invalidProduct.validate()
      return error
    }).not.to.be.false

    const { error, value } = await repository.add(invalidProduct)
    expect(error).not.to.be.false
    expect(value).to.be.null
  })
})
