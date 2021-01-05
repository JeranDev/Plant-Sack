const initalState = {
  plant: { results: [] },
  isLoading: true,
}

const detailReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        plant: action.payload.plant,
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
