import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { getCourses } from './states/courses.selector';
import { AppState } from '../app.state';

@Component({
    selector: 'app-courses',
    template: `
        <main class="courses-page">
            <header class="courses-page__header">
                <div>
                    <p class="courses-page__eyebrow">Learning library</p>
                    <h1>Explore courses</h1>
                </div>
                <span class="courses-page__count">{{ (courses$ | async)?.length || 0 }} courses</span>
            </header>

            <section class="course-grid" aria-label="Available courses">
                <app-course-card
                    *ngFor="let course of courses$ | async"
                    [course]="course"
                    (edit)="onEdit($event)"
                    (delete)="onDelete($event)"
                    (information)="onInformation($event)">
                </app-course-card>
            </section>
        </main>
    `,
    styles: [`
        :host {
            display: block;
            min-height: 100vh;
            background: #f5f8f7;
        }

        .courses-page {
            max-width: 1180px;
            margin: 0 auto;
            padding: 48px 24px;
        }

        .courses-page__header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 32px;
        }

        .courses-page__eyebrow {
            margin: 0 0 8px;
            color: #d9653b;
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        h1 {
            margin: 0;
            color: #17252f;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1;
        }

        .courses-page__count {
            color: #63717a;
            font-size: 0.9rem;
            font-weight: 700;
        }

        .course-grid {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            gap: 24px;
        }

        app-course-card {
            flex: 1 1 290px;
            min-width: 260px;
            max-width: 370px;
        }

        @media (max-width: 640px) {
            .courses-page {
                padding: 32px 16px;
            }

            .courses-page__header {
                align-items: flex-start;
                flex-direction: column;
                gap: 12px;
            }

            app-course-card {
                max-width: none;
            }
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {

    courses$ = this._store.select(getCourses);

    constructor(private _store: Store<AppState>) {

    }

    onEdit(course: any): void {
        console.log('Edit course', course);
    }

    onDelete(course: any): void {
        console.log('Delete course', course);
    }

    onInformation(course: any): void {
        console.log('Course information', course);
    }
}