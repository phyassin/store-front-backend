import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import lastUser from './handler/users.control'
import lastProduct from './handler/product.control'
import lastOrder from './handler/order.control'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

app.use(bodyParser.json())

lastUser(app)
lastProduct(app)
lastOrder(app)
// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello Wooorld'
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server started at port:${PORT}`)
})

export default app
