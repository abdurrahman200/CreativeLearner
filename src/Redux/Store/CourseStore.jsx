const { createStore } = require("redux");
const { default: CourseReducer } = require("../Reducers/CourseReducer");

export const store = createStore(CourseReducer);
