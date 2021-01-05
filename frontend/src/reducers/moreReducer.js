const initalState = {
  morePlants: [],
  isLoading: true,
}

const moreReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_MORE_PLANTS':
      return {
        ...state,
        morePlants: action.payload.morePlants,
        isLoading: false,
      }
    case 'LOADING_MORE_PLANTS':
      return {
        ...state,
        isLoading: true,
      }
    default:
      return { ...state }
  }
}

export default moreReducer
