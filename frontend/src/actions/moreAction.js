// import axios from 'axios'

// export const loadMore = pageNumber => async dispatch => {
//   dispatch({
//     type: 'LOADING_MORE_PLANTS',
//   })

//   const plantsData = await axios.get(plantsURL(), {
//     params: { page: pageNumber + 1 },
//   })
//   dispatch({
//     type: 'FETCH_MORE_PLANTS',
//     payload: {
//       morePlants: plantsData.data.data,
//     },
//   })
// }
