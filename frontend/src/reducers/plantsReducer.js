const initalState = {
  initialPlants: [],
  pageNumber: 2,
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
    case 'FETCH_MORE_PLANTS':
      return {
        ...state,
        initialPlants: [
          ...action.payload.initialPlants,
          ...action.payload.morePlants,
        ],
        pageNumber: action.payload.pageNumber,
        isLoading: false,
      }
    default:
      return { ...state }
  }
}

export default plantsReducer
