import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import tableReducer from "./tableReducer";


let reducers = combineReducers({
    tablePage: tableReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store