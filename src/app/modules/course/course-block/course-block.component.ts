import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseBlockComponent implements OnInit {
  @Input() course;
  @Input() edit;
  @Output() courseDeleted = new EventEmitter();
  @Output() courseEdited = new EventEmitter();
  @Output() courseRated = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  emitEdit() {
    this.courseEdited.emit(this.course);
  }

  emitDelete() {
    this.courseDeleted.emit(this.course);
  }

  rateCourse() {
    this.courseRated.emit(this.course);
  }
}
