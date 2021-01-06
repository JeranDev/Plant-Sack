const initalState = {
  plantDetail: { results: [] },
  isLoading: true,
}

const detailReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        plantDetail: action.payload.plantDetail,
        isLoading: false,
      }
    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      }
    default:
      return { ...state }
  }
}

export default detailReducer
