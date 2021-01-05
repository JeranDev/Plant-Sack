import axios from 'axios'
import { plantsURL } from '../api'

export const loadPlants = () => async dispatch => {
  dispatch({
    type: 'LOADING_PLANTS',
  })

  const plantsData = await axios.get('/api/plants')
  dispatch({
    type: 'FETCH_PLANTS',
    payload: {
      initialPlants: plantsData.data.data,
    },
  })
}
