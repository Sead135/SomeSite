export const fetchPost = () => {
    return async (dispatch) => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            const posts = await data.json()
            dispatch({type: "FETCH_POSTS", payload: posts})
        }
        catch (e) {
            dispatch({type: "FETCH_POSTS_ERROR", payload: "Ошибка загрузки постов"})
        }
    }
}
