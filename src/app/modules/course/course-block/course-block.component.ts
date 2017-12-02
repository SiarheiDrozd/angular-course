import {Component, OnInit, Input} from '@angular/core';

import {CourseBlockInterface} from './course-block.interface';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.css']
})
export class CourseBlockComponent implements OnInit {
  @Input('course') course: CourseBlockInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
