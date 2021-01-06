import express from 'express'
import asyncHandler from 'express-async-handler'
import axios from 'axios'
import dotenv from 'dotenv'
const router = express.Router()

dotenv.config()

//Base URL
const base_url = 'https://trefle.io/api/v1/plants/'
const apiKey = process.env.TREFLE_API_KEY
const token = `?token=${apiKey}`

//Fetch Plants
const plantsURL = () => `${base_url}${token}`

//Plant Details
const plantDetailURL = scientificName => `${base_url}${scientificName}${token}`

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const plantsData = await axios.get(plantsURL())

    if (plantsData) {
      res.json(plantsData.data)
    } else {
      res.status(404)
      throw new Error('Plants not found')
    }
  })
)

router.get(
  '/:plant',
  asyncHandler(async (req, res) => {
    const detailData = await axios.get(plantDetailURL(req.params.plant))

    if (detailData) {
      res.json(detailData.data)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
