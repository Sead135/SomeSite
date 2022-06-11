export const loadTheme = (cookie) => {
    return async (dispatch) => {
        dispatch({
          type: "LOAD_THEME",
          payload: cookie === "dark" ? "dark" : "light",
        });
    }
}