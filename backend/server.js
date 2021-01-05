import config from './config.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/plants', config)

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
