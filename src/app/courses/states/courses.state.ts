import { Courses } from '../model/courses.model';

export interface CoursesState {
    courses: Array<Courses>
}

export const initialState: CoursesState = {
    courses: [
        {
            id: 1,
            title: 'Mastering Modern Javascript',
            description: 'A comprehensive course covering ES6+ features, Asynchronus javascript, and font-end development essentials',
            catagory: 'programming',
            imageUrl: './assets/angular.webp',
            author: 'John Doe',
            price: 49.99,
        },
    ],
}