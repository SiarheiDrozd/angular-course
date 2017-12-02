import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})

export class CoursesPageComponent implements OnInit {
  public courses: object[];
  private dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`;
  private defaultControls = [
    {
      type: 'button',
      label: 'edit course',
      event: 'some event'
    },
    {
      type: 'button',
      label: 'delete',
      event: 'some event'
    }
  ];

  constructor() {
    this.courses = [];
  }

  ngOnInit() {
    this.courses = [
      {
        id: '1',
        title: 'video course',
        duration: '4533000',
        date: '1 Jan 1991',
        description: this.dummyText,
        controls: this.defaultControls
      },
      {
        id: '2',
        title: 'video course',
        duration: '4533000',
        date: '832290375902',
        description: this.dummyText,
        controls: this.defaultControls
      },
      {
        id: '3',
        title: 'video course',
        duration: '4533000',
        date: new Date(),
        description: this.dummyText,
        controls: undefined
      },
    ];
  }

}
