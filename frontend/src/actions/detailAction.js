import axios from 'axios'
import { plantDetailURL } from '../api'

export const loadDetail = scientificName => async dispatch => {
  dispatch({
    type: 'LOADING_DETAIL',
  })

  const detailData = await axios.get(plantDetailURL(scientificName))

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      plant: detailData.data,
    },
  })
}
