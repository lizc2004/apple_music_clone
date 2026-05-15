const initialState = {
  results: [],
  query: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return { ...state, results: action.payload.results, query: action.payload.query }
    case 'CLEAR_SEARCH':
      return { ...state, results: [], query: '' }
    default:
      return state
  }
}

export default searchReducer