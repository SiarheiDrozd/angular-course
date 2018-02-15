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
    const ORIGIN = window.location.origin,
      PATH_ARRAY = window.location.pathname.split('/');

    if (PATH_ARRAY[0] === '') {
      PATH_ARRAY.shift();
    }

    this.path = PATH_ARRAY.map(function (item, index) {
      return {
        href: ORIGIN + '/' + PATH_ARRAY.slice(0, index + 1).join('/'),
        displayName: item
      };
    });
  }

}
