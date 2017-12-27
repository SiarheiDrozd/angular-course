import {Component, OnInit, Input} from '@angular/core';
import {Breadcrumb} from './breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

  public path: Breadcrumb[];

  constructor() {
    this.path = [];
  }

  ngOnInit() {
    const ORIGIN = window.location.origin;
    let pathArray = window.location.pathname.split('/');

    console.log(pathArray);
    this.path = pathArray.map(function (item, index) {
      if (item === '') {
        item = 'home';
      }

      return {
        href: ORIGIN + pathArray.slice(0, index + 1).join('/'),
        displayName: item
      };
    });

    console.log(this.path);
  }

}
