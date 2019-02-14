import express from 'express'
import bodyparser from 'body-parser'
import { ProductsRouter } from './controller/routes'

const App = express()

App.use(bodyparser.json())

App.use(ProductsRouter)

App.use((err, req, res, next) => {
  res.send({ "type": "ERROR", "message": "Deu ruim"})
})

export { App }
