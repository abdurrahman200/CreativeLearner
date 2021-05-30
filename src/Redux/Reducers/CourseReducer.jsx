import { ADD_TO_COURSE, REMOVE_FROM_COURSE } from "../Action/CourseAction";

const initialState = {
  courses: [],
  products: [
    {
      id: 1,
      name: "Mellicent Bunclark",
      title: "Associate Professor",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 2,
      name: "Dorette Errington",
      title: "Payment Adjustment Coordinator",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 3,
      name: "Tony Evill",
      title: "Human Resources Manager",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 4,
      name: "Corabella Gaw",
      title: "GIS Technical Architect",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 5,
      name: "Alvina Craighill",
      title: "Web Developer II",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 6,
      name: "Loria Mountjoy",
      title: "Community Outreach Specialist",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 7,
      name: "Elonore Broune",
      title: "Software Engineer IV",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 8,
      name: "Christi Zanettini",
      title: "Librarian",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 9,
      name: "Reggy Hagan",
      title: "Systems Administrator I",
      video: "https://huffingtonpost.com/",
    },
    {
      id: 10,
      name: "Deeann Medcraft",
      title: "Safety Technician III",
      video: "https://huffingtonpost.com/",
    },
  ],
};

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
