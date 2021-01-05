import axios from 'axios'
import { plantsURL } from '../api'

export const loadPlants = pageNumber => async dispatch => {
  dispatch({
    type: 'LOADING_PLANTS',
  })

  const plantsData = await axios.get(plantsURL(), {
    params: { page: pageNumber },
  })
  dispatch({
    type: 'FETCH_PLANTS',
    payload: {
      initialPlants: plantsData.data.data,
    },
  })
}
