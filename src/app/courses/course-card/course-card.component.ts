import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../model/courses.model';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
    @Input() course!: Courses;

    @Output() edit = new EventEmitter<Courses>();
    @Output() delete = new EventEmitter<Courses>();
    @Output() information = new EventEmitter<Courses>();

    onEdit(): void {
        this.edit.emit(this.course);
    }

    onDelete(): void {
        this.delete.emit(this.course);
    }

    onInformation(): void {
        this.information.emit(this.course);
    }
}
