import express from 'express'
import bodyparser from 'body-parser'
import { ProductsRouter } from './controller/routes'

const App = express()

App.use(bodyparser.json())

App.use(ProductsRouter)

App.use((err, req, res, next) => {
  const response = { 'type': 'error' }

  if(err.isApplicationError) {
    response.code =  err.code,
    response.message= err.message,
    response.details = {
      ...err.context
    }
    switch(err.code) {
    case 'ERR_RECORD_NOT_FOUND':
      res.status(404)
      break
    default:
      res.status(400)
      break
    }
  }
  else {
    res.status(500)
  }

  res.send(response)
})

export { App }
