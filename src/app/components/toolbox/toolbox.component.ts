import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less']
})
export class ToolboxComponent implements OnInit {

  searchKey = '';
  @Output() filter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search (value) {
    this.filter.emit(value);
  }

}
