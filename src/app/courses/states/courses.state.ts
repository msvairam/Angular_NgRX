import { Courses } from '../model/courses.model';

export interface CoursesState {
    courses: Array<Courses>
}

export const initialState: CoursesState = {
    courses: [],
}