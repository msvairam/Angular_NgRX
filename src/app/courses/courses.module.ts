import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
        FormsModule,
        RouterModule.forChild(routers)
    ],
    providers: [],
})
export class CoursesModule {

}