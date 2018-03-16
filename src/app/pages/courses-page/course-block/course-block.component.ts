import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.less'],
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
