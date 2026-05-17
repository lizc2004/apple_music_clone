const initialState = {
    currentPage: 'home',
    artistId: null
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload, artistId: null }
        case 'SET_ARTIST':
            return { ...state, currentPage: 'artist', artistId: action.payload }
        default:
            return state
    }
}

export default uiReducer