const initialState = {
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRACK':
            return {
                ...state, currentTrack: action.payload, isPlaying: true, currentTime: 0
            }
        case 'TOGGLE_PLAY':
            return {
                ...state, isPlaying: !state.isPlaying
            }
        case 'SET_CURRENT_TIME':
            return {
                ...state, currentTime: action.payload
            }
        default:
            return state
    }
}

export default playerReducer