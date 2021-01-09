const initalState = {
  initialPlants: [],
  searchedPlants: [],
  pageNumber: 1,
  isLoading: true,
  searched: false,
  noMore: false,
  query: '',
}

const plantsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOADING_PLANTS':
      return {
        ...state,
        isLoading: true,
        noMore: false,
      }
    case 'FETCH_PLANTS':
      return {
        ...state,
        initialPlants: [
          ...action.payload.initialPlants,
          ...action.payload.morePlants,
        ],
        pageNumber: action.payload.pageNumber,
        isLoading: false,
        searched: false,
      }
    case 'ADD_QUERY':
      return {
        ...state,
        query: action.payload.query,
      }
    case 'SEARCH_PLANTS':
      return {
        ...state,
        searchedPlants: [
          ...action.payload.searchedPlants,
          ...action.payload.morePlants,
        ],
        pageNumber: action.payload.pageNumber,
        isLoading: false,
        searched: true,
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
