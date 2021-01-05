import express from 'express'
import asyncHandler from 'express-async-handler'
import axios from 'axios'
import cors from 'cors'
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
const plantDetailURL = scientificName => {
  const plantName = scientificName.split(' ').join('-')
  return `${base_url}${plantName}${token}`
}

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

export default router
