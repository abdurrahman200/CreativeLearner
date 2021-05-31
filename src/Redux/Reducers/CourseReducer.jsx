import aboutsData from '../../Assets/data/aboutData.json';
import courseData from '../../Assets/data/CourseData.json';
import successData from '../../Assets/data/successData.json';
import { ADD_TO_COURSE, REMOVE_FROM_COURSE } from "../Action/CourseAction";


const initialState = {
  courseList: courseData,
  aboutList: aboutsData,
  successList: successData
};
console.log(courseData);

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COURSE:
      const newId = action.id;
      const newCourse = [...state.courses, newId];
      return { ...state, courses: newCourse };

    case REMOVE_FROM_COURSE:
      const CourseId = action.CourseId;
      const remainingCourse = state.courses.filter(
        (items) => items !== CourseId
      );
      return { ...state, courses: remainingCourse };

    default:
      return state;
  }
};

export default CourseReducer;
