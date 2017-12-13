import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less']
})
export class ToolboxComponent implements OnInit {

  searchKey = '';

  constructor() { }

  ngOnInit() {
  }

  search (value) {
    console.log(value);
  }

}
