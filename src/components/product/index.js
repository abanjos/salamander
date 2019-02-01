import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const response = { "yeah" : "it works" }
    res.send(response)
  })

  export { router as ProductsRouter }