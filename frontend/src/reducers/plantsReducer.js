const initalState = {
  initialPlants: [],
  pageNumber: 18875,
  isLoading: true,
  noMore: false,
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
    case 'LAST_PAGE':
      return {
        ...state,
        isLoading: false,
        noMore: true,
      }
    default:
      return { ...state }
  }
}

export default plantsReducer
