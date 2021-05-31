// const { createStore, combineReducers} = require  ("redux");
// const courseReducer = require ('../Reducers/CourseReducer.jsx');

// const combineReducer = combineReducers({
    //     courses:courseReducer
    // })
    
    // export const store = createStore(combineReducer);
    
import { combineReducers, createStore } from "redux";
import courseReducer from '../Reducers/CourseReducer';

const combineReducer = combineReducers({
    siteState: courseReducer
})

export const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());   