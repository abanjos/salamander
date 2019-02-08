import express from 'express'
import { productsController } from './controllers'
import { CreateProduct } from './application'
import { product as Product } from '../../database/models'
import { ProductRepository } from './infra.js'

const router = express.Router()

router.get('/', (req, res) => {
    const response = { "yeah" : "it works" }
    res.send(response)
})

router.post('/products', (req, res) => {

  const productRepository = new ProductRepository(Product)

  const context = {
    request: req,
    createProduct: new CreateProduct(productRepository)
  }

  const response = productsController.create(context)
  res.send(response)
})

export { router as ProductsRouter }