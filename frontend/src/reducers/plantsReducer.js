const initalState = {
  initialPlants: [],
  pageNumber: 2,
  isLoading: true,
  searched: false,
  query: '',
  noMore: false,
}

const plantsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOADING_PLANTS':
      return {
        ...state,
        isLoading: true,
      }
    case 'FETCH_PLANTS':
      return {
        ...state,
        initialPlants: action.payload.initialPlants,
        isLoading: false,
        searched: false,
        pageNumber: 2,
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
    case 'ADD_QUERY':
      return {
        ...state,
        query: action.payload.query,
      }
    case 'SEARCH_PLANTS':
      return {
        ...state,
        initialPlants: action.payload.searchedPlants,
        isLoading: false,
        searched: true,
        pageNumber: 2,
      }
    case 'SEARCH_MORE_PLANTS':
      return {
        ...state,
        initialPlants: [
          ...action.payload.searchedPlants,
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
