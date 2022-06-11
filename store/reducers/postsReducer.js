const initialState = {
    posts: [],
    error: ''
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return {error: '', posts: action.payload}
        case "FETCH_POSTS_ERROR":
            return {...state, error: action.payload}
        default:
            return state
    }
}