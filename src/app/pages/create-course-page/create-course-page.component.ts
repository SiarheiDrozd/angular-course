import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.less']
})
export class CreateCoursePageComponent implements OnInit {

  public durationVal: number;
  public courseForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.courseForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      duration: new FormControl()
    });
  }
}
