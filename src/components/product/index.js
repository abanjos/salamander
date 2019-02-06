import express from 'express'
import { productsController } from './controllers'
import { CreateProduct } from './application'

const router = express.Router()

router.get('/', (req, res) => {
    const response = { "yeah" : "it works" }
    res.send(response)
})

router.post('/products', (req, res) => {
  const context = {
    request: req,
    createProduct: CreateProduct
  }

  const response = productsController.create(context)
  res.send(response)
})

export { router as ProductsRouter }