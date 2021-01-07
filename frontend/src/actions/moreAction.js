import axios from 'axios'

export const loadMorePlants = (initialPlants, pageNumber) => async dispatch => {
  dispatch({
    type: 'LOADING_PLANTS',
  })

  const plants = await axios.get(`/api/plants/page/${pageNumber}`)

  const lastPage = plants.data.links.last
  let lastPageNumber = lastPage.match(/\d/g)
  lastPageNumber = lastPageNumber.join('')
  lastPageNumber = lastPageNumber.slice(1)

  if (pageNumber < lastPageNumber) {
    dispatch({
      type: 'FETCH_MORE_PLANTS',
      payload: {
        morePlants: plants.data.data,
        initialPlants: initialPlants,
        pageNumber: pageNumber + 1,
      },
    })
  } else {
    dispatch({
      type: 'LAST_PAGE',
    })
  }
}