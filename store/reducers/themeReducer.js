import cookie from "js-cookie";

const initialState = {
    selectTheme: "light"
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIGHT_THEME": {
            cookie.set("theme", "light")
            return {...state, selectTheme: 'light'}
        }
        case "DARK_THEME": {
            cookie.set("theme", "dark")
            return {...state, selectTheme: 'dark'}
        }
        case "LOAD_THEME": {
            return {...state, selectTheme: action.payload}
        }
        default:
            return state
    }
}