import axios from 'axios'

export const loadMorePlants = (initialPlants, pageNumber) => async dispatch => {
  dispatch({
    type: 'LOADING_PLANTS',
  })

  const plants = await axios.get(`/api/plants/page/${pageNumber}`)

  dispatch({
    type: 'FETCH_MORE_PLANTS',
    payload: {
      morePlants: plants.data.data,
      initialPlants: initialPlants,
      pageNumber: pageNumber + 1,
    },
  })
}
