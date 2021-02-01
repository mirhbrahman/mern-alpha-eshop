import express from 'express'
import donenv from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from "./config/db.js"
import productRoute from './routes/productRoutes.js'
import userRoutes from "./routes/userRoutes.js";


donenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API is running...')
})

app.use('/api/products', productRoute)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

