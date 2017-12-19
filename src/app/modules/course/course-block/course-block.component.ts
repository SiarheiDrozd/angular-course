import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

// import {CourseBlockInterface} from './course-block.interface';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.less']
})
export class CourseBlockComponent implements OnInit {
  @Input('course') course;
  @Output() courseDeleted = new EventEmitter();
  @Output() courseRated = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  controlEvent(eventType) {
    switch (eventType) {
      case 'edit':
        this.emitEdit();
        break;
      case 'delete':
        this.emitDelete();
        break;
      default:
        this.emitUnknownEvent(eventType);
    }
  }

  emitUnknownEvent(eventName) {
    console.log('unknown event: ', eventName);
  }

  emitEdit() {
    console.log('edit: ', this.course.id);
  }

  emitDelete() {
    this.courseDeleted.emit(this.course.id);
  }
}
