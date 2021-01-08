import express from 'express'
import asyncHandler from 'express-async-handler'
import axios from 'axios'
import dotenv from 'dotenv'
const router = express.Router()

dotenv.config()

//Base URL
const base_url = 'https://trefle.io/api/v1/plants/'
const apiKey = process.env.TREFLE_API_KEY

//Fetch Plants
const plantsURL = () => `${base_url}`
const searchPlantsURL = () => `${base_url}search`

//Plant Details
const plantDetailURL = scientificName => `${base_url}${scientificName}`

//Initial Plants
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const plantsData = await axios.get(plantsURL(), {
      params: {
        token: apiKey,
      },
    })

    if (plantsData) {
      res.json(plantsData.data)
    } else {
      res.status(404)
    }
  })
)

//Fetch More Initial Plants
router.get(
  '/page/:number',
  asyncHandler(async (req, res) => {
    const plantsData = await axios.get(plantsURL(), {
      params: {
        token: apiKey,
        page: req.params.number,
      },
    })

    if (plantsData) {
      res.json(plantsData.data)
    } else {
      res.status(404)
    }
  })
)

//Search Plants
router.get(
  '/search/:query/',
  asyncHandler(async (req, res) => {
    const plantsData = await axios.get(searchPlantsURL(), {
      params: {
        token: apiKey,
        q: req.params.query,
      },
    })
    console.log(req.params)

    if (plantsData) {
      res.json(plantsData.data)
    } else {
      res.status(404)
    }
  })
)

//Fetch More Searched Plants
router.get(
  '/search/:query/:page',
  asyncHandler(async (req, res) => {
    const plantsData = await axios.get(searchPlantsURL(), {
      params: {
        token: apiKey,
        page: req.params.page,
        q: req.params.query,
      },
    })
    console.log(plantsData.data)
    console.log(req.params)

    if (plantsData) {
      res.json(plantsData.data)
    } else {
      res.status(404)
    }
  })
)

//Plant Details
router.get(
  '/:plant',
  asyncHandler(async (req, res) => {
    const detailData = await axios
      .get(plantDetailURL(req.params.plant), {
        params: {
          token: apiKey,
        },
      })
      .catch(() => {
        //Handled in PlantDetail.js
        res.send('')
      })

    if (detailData) {
      res.json(detailData.data)
    }
  })
)

export default router
