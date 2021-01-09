import axios from 'axios'

export const loadPlants = (initialPlants, pageNumber) => async dispatch => {
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
      type: 'FETCH_PLANTS',
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

export const addQuery = query => async dispatch => {
  dispatch({
    type: 'ADD_QUERY',
    payload: {
      query: query,
    },
  })
}

export const searchPlants = (
  searchedPlants,
  pageNumber,
  query
) => async dispatch => {
  dispatch({
    type: 'LOADING_PLANTS',
  })

  const search = await axios.get(`/api/plants/search/${query}/${pageNumber}`)

  const lastPage = search.data.links.last
  let lastPageNumber = lastPage.match(/\d/g)
  lastPageNumber = lastPageNumber.join('')
  lastPageNumber = lastPageNumber.slice(1)

  if (pageNumber < lastPageNumber) {
    dispatch({
      type: 'SEARCH_PLANTS',
      payload: {
        morePlants: search.data.data,
        searchedPlants: searchedPlants,
        pageNumber: pageNumber + 1,
      },
    })
  } else if ((pageNumber = 1)) {
    dispatch({
      type: 'SEARCH_PLANTS',
      payload: {
        morePlants: search.data.data,
        searchedPlants: searchedPlants,
        pageNumber: pageNumber,
      },
    })

    dispatch({
      type: 'LAST_PAGE',
    })
  } else {
    dispatch({
      type: 'LAST_PAGE',
    })
  }
}
