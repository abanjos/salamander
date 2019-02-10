import { ProductCategoryRepository } from '../../../../src/infra/product/ProductCategoryRepository'
import { product_category as ProductCategoryModel } from '../../../../src/infra/database/models'
import { ProductCategory } from '../../../../src/domain/product/ProductCategory'


describe('Infra :: Product :: ProductCategoryRepository', () => {
    
    let repository

    beforeEach(() => {
        repository = new ProductCategoryRepository({ ProductCategoryModel })
    })

    describe('#add', () => {
        test('When product category is valid persists the product category.', async () => {
            const productCategory = new ProductCategory({ display_name: 'Limpeza' })

            expect.assertions(2)

            const created = await repository.add(productCategory)
            expect(created.id).toBeDefined()
            expect(created.display_name).toBe('Limpeza')
        })

        test('When product category is not valid.', async () => {
            const productCategory = new ProductCategory({ display_name: '' })

            expect.assertions(2)
            const { error, value } = productCategory.validate()
            expect(error).not.toBeNull()
            await expect(repository.add(productCategory)).rejects.toThrow()

        })
    })
})