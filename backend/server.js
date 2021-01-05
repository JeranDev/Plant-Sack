import config from './config.js'
import express from 'express'
import dotenv from 'dotenv'
import request from 'request'
import cors from 'cors'

dotenv.config()

const app = express()
const port = config.port
app.use(cors())

app.use('/', function (req, res) {
  //Take the baseurl from your api and also supply whatever
  //route you use with that url
  let url = config.apiUrl + req.url
  let query = config.assignKey(req.query)

  //Pipe is through request, this will just redirect
  //everything from the api to your own server at localhost.
  //It will also pipe your queries in the url
  req.pipe(request({ qs: query, uri: url })).pipe(res)
})

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
