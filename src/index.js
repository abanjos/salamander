import { App } from './app.js'

const port = 3000
const hostname = '127.0.0.1'

App.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})