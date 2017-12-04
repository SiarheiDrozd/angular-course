import {Component, OnInit} from '@angular/core';
import {Course} from '../../modules/course/course-block/course-block.class';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})

export class CoursesPageComponent implements OnInit {
  public courses: Course[];
  private dummyText: string;
  private defaultControls: Object[];

  constructor() {
    this.courses = [];
  }

  ngOnInit() {
    this.dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`;
    this.defaultControls = [
      {
        type: 'button',
        label: 'edit course',
        event: 'edit'
      },
      {
        type: 'button',
        label: 'delete',
        event: 'delete'
      }
    ];
    this.courses = [
      new Course(
        '1',
        'video course',
        '4533000',
        '1 Jan 1991',
        this.dummyText,
        this.defaultControls
      ),
      new Course(
        '2',
        'video course',
        '4533000',
        '832290375902',
        this.dummyText,
        this.defaultControls
      ),
        new Course(
        '3',
        'video course',
        '4533000',
        new Date().toString(),
        this.dummyText,
        [
          {
            type: 'button',
            label: 'some unknown event',
            event: 'someEvent'
          }
        ]
      ),
    ];
  }

  handleCourseDelete(id) {
    console.log('deleteHandler: ', id);
  }
}
