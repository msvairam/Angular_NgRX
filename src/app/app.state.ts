import { CounterState } from './counter/states/counter.state';
import { CoursesState } from './courses/states/courses.state';

import { counterReducer } from './counter/states/counter.reducer';
import { coursesReducer } from './courses/states/courses.reducer';

export type AppState = {
    counter: CounterState,
    courses: CoursesState,
}

export const appReducer = {
    counter:  counterReducer,
    coureses: coursesReducer,
}