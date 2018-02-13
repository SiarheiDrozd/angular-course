import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.less']
})
export class CreateCoursePageComponent implements OnInit {

  authorsList: any[];

  constructor(private _location: Location) {
  }

  ngOnInit() {
    this.authorsList = [
      {
        label: 'John'
      },
      {
        label: 'doe'
      }
    ];
  }

  submit(form) {
    console.log(form);
  }

  back() {
    this._location.back();
  }
}
