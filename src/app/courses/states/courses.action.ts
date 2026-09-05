import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { Courses } from '../model/courses.model';

export const getCourses = createAction('getCourses');
export const createCourse = createAction(
	'createCourse',
	props<{ course: Courses }>(),
);
export const updateCourse = createAction(
    'updateCourse',
    props<{course: Courses }>(),
);

export const deleteCourse = createAction('deleteCourse', props<{id: number}>());