import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import firstReducer from "../reducers/FirstReducer";
import secondReducer from "../reducers/SecondReducer";
import logger from "redux-logger"


const cb = combineReducers({ firstReducer, secondReducer })

var store = legacy_createStore(cb, applyMiddleware(logger));

export default store;