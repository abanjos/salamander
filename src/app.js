import express from 'express'
import bodyparser from 'body-parser'
import { ProductsRouter } from './components/product'

const App = express()

App.use(bodyparser.json())

App.use(RecipesRouter)

export { App }