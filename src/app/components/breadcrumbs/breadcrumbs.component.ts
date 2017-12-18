import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() paths: Object;

  constructor() {
    this.paths = null;
  }

  ngOnInit() {
    if (!this.paths) {
      this.paths = {
        name: 'Courses',
        path: 'courses'
      }
    }
  }

}
