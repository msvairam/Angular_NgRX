import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';

const routers: Routes = [
    {
        path: '',
        component: CoursesComponent,
    }
]

@NgModule({
    declarations: [
        CoursesComponent,
        CourseCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routers)
    ],
    providers: [],
})
export class CoursesModule {

}