const initalState = {
  initialPlants: [],
  isLoading: true,
}

const plantsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_PLANTS':
      return {
        ...state,
        initialPlants: action.payload.initialPlants,
        isLoading: false,
      }
    case 'LOADING_PLANTS':
      return {
        ...state,
        isLoading: true,
      }
    default:
      return { ...state }
  }
}

export default plantsReducer
