import axios from 'axios'

export const loadDetail = scientificName => async dispatch => {
  dispatch({
    type: 'LOADING_DETAIL',
  })

  const plantName = scientificName.split(' ').join('-')
  const detailData = await axios.get(`/api/plants/${plantName}`)

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      plantDetail: detailData.data,
    },
  })
}
