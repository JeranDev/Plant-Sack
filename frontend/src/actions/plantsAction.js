import axios from 'axios'

export const loadPlants = () => async dispatch => {
  dispatch({
    type: 'LOADING_PLANTS',
  })

  const plants = await axios.get(`/api/plants/`)

  dispatch({
    type: 'FETCH_PLANTS',
    payload: {
      initialPlants: plants.data.data,
    },
  })
}
