import { Component, OnInit } from '@angular/core';

import { CourseBlockInterface } from './course-block.interface';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.css']
})
export class CourseBlockComponent implements OnInit, CourseBlockInterface {

  id: string;
  title: string;
  date: Date;
  duration: number;
  description: string;
  controls?: object[];

  constructor() { }

  ngOnInit() {
  }

}
