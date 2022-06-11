import {createWrapper} from "next-redux-wrapper";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";

// create a makeStore function
const makeStore = context => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: false});