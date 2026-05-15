const initialState = {
    tracks: [],
}

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
                ...state, tracks: [...state.tracks, action.payload]
            }
        case 'REMOVE_FAVOURITE':
            return {
                ...state, tracks: state.tracks.filter(track => track.id !== action.payload)
            }
        default:
            return state
    }
}

export default favouriteReducer