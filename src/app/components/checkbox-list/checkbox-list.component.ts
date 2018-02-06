import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.less']
})
export class CheckboxListComponent implements OnInit {

  @Input('list') list: any[];

  constructor() { }

  ngOnInit() {
  }

}
