import express from 'express'
import { ProductsController } from './product/ProductsControler'
import { CreateProduct } from '../application/product/CreateProduct'
import { product as ProductModel } from '../infra/database/models'
import { ProductRepository } from './infra.js'

const router = express.Router()

router.get('/', (req, res) => {
    const response = { "yeah" : "it works" }
    res.send(response)
})

router.post('/products', (req, res) => {

  const productRepository = new ProductRepository(ProductModel)

  const context = {
    request: req,
    createProduct: new CreateProduct(productRepository)
  }

  const response = productsController.create(context)
  res.send(response)
})

export { router as ProductsRouter }