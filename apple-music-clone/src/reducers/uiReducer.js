const initialState = {
    currentPage: 'home'
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload}
            default:
                return state 
    }
}

export default uiReducer