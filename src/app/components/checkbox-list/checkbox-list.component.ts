import {Component, OnInit, AfterContentInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxListComponent),
      multi: true
    }
  ]
})
export class CheckboxListComponent implements ControlValueAccessor, OnInit, AfterContentInit {
  @Input() fullList: any[];

  public onChange: Function;
  public onTouched: Function;

  public listToDisplay;
  private _checkedList: any[];

  constructor() {
    console.log(this.fullList);
    this.listToDisplay = this.fullList;
  }

  ngOnInit() {
    console.log(this.fullList);
  }
  ngAfterContentInit() {
    console.log(this.fullList);

  }
  get value(): any[] {
    return Array.from(this._checkedList);
  }

  set value(value: any[]) {
    this._checkedList = value;
    if (this.onChange) {
      this.onChange(this._checkedList);
    }
  }

  changeState(item) {
    console.log(item);
  }

  writeValue(value: any[]) {
    this._checkedList = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
