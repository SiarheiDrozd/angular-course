import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

  @Input('path') path: Object[];

  constructor() {
    this.path = null;
  }

  ngOnInit() {
    if(!this.path) {
      this.path = [
          {
            name: 'Courses',
            path: 'courses'
          }
      ]
    }
  }

}
