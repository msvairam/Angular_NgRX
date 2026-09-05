import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import { createCourse, getCourses, updateCourse, deleteCourse } from './courses.action';

export const coursesReducer = createReducer(
    initialState,
    on(getCourses, (state) => ({ ...state })),
    on(createCourse, (state, { course }) => ({
        ...state,
        courses: [
            ...state.courses,
            { ...course, id: Math.max(0, ...state.courses.map((item) => item.id)) + 1 },
        ],
    })),

    on(updateCourse, (state, { course }) => {
        return {
            ...state,
            courses: [
                ...state.courses.map((c) => c.id === course.id ? course:  c)
            ]
        }
    }),

    on(deleteCourse, (state, { id }) => {
        return {
            ...state,
            courses: [
                ...state.courses.filter((c) => c.id !== id),
            ]
        }
    }),
)