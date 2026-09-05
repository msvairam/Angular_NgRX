import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import { getCourses } from './courses.action';

export const coursesReducer = createReducer(
    initialState,
    on(getCourses, (state) => ({ ...state })),
)