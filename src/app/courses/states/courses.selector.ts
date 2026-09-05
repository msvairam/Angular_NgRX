import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';


const coursesState = createFeatureSelector<CoursesState>('courses');

export const  getCourses = createSelector(coursesState, (state) => state.courses);