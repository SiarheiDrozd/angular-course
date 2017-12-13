import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  path: Object[];

  constructor() {

  }

  ngOnInit() {
    this.path = [
      {
          name: 'Courses',
          path: 'courses'
      }
    ]
  }

}
