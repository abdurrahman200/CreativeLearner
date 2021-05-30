export const ADD_TO_COURSE = 'ADD_TO_COURSE';
export const REMOVE_FROM_COURSE = 'REMOVE_FROM_COURSE';


export const addToCourse = (id) => {
    return { type: ADD_TO_COURSE, id }
}

export const removeFromCOURSE = (courseId) => {
    return { type: REMOVE_FROM_COURSE, courseId }
}