import path from 'path'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
//Routes
import routes from './routes.js'

dotenv.config()

const app = express()
app.use(cors())

app.use('/api/plants', routes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
