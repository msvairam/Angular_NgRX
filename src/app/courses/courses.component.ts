import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getCourses } from './states/courses.selector';
import { AppState } from '../app.state';
import { Courses } from './model/courses.model';
import { createCourse, updateCourse, deleteCourse } from './states/courses.action';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
    courses$ = this._store.select(getCourses);
    searchTerm = '';
    isCreateFormOpen = false;
    isEditFormOpen = false;
    isDeleteConfirmOpen = false;
    courseToDelete: Courses | null = null;
    newCourse: Courses = this.createEmptyCourse();

    constructor(private _store: Store<AppState>) {
    }

    onSearch(searchTerm: string): void {
        this.searchTerm = searchTerm;
    }

    openCreateForm(): void {
        this.newCourse = this.createEmptyCourse();
        this.isCreateFormOpen = true;
    }

    closeCreateForm(): void {
        this.isCreateFormOpen = false;
    }

    onCreateCourse(form: NgForm): void {
        if (form.invalid) {
            return;
        }

        if(this.isEditFormOpen) {
            const updateValue = {
                id: this.newCourse.id,
                ...form.value,
            }
            this._store.dispatch(updateCourse({course: updateValue}));
        } else {
            this._store.dispatch(createCourse({ course: this.newCourse }));
        }
        this.closeCreateForm();
        this.isEditFormOpen =  false;
    }

    filterCourses(courses: Courses[]): Courses[] {
        const searchTerm = this.searchTerm.trim().toLowerCase();

        if (!searchTerm) {
            return courses;
        }

        return courses.filter((course) =>
            [course.title, course.description, course.catagory, course.author]
                .some((value) => value.toLowerCase().includes(searchTerm))
        );
    }

    onEdit(course: Courses): void {

         this.newCourse = course;
        this.isCreateFormOpen = false;
         this.isEditFormOpen = true;
        console.log('Edit course', course);
    }

    onDelete(course: Courses): void {
        this.courseToDelete = course;
        this.isDeleteConfirmOpen = true;
    }

    closeDeleteConfirmation(): void {
        this.isDeleteConfirmOpen = false;
        this.courseToDelete = null;
    }

    confirmDelete(): void {
        if (!this.courseToDelete) {
            return;
        }
        console.log(this.courseToDelete);

        this._store.dispatch(deleteCourse({id: this.courseToDelete.id}))
        this.closeDeleteConfirmation();
    }

    onInformation(course: Courses): void {
        console.log('Course information', course);
    }

    private createEmptyCourse(): Courses {
        return {
            id: 0,
            title: '',
            description: '',
            catagory: '',
            price: 0,
            imageUrl: './assets/angular.webp',
            author: '',
        };
    }
}