import {Component, OnInit, Input, forwardRef} from '@angular/core';
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
export class CheckboxListComponent implements ControlValueAccessor, OnInit {
  private _fullList: Array<{ label: string, checked: boolean, data? }>;
  private _checkedList: any[];

  @Input()
  set fullList(list: Array<{ label: string, checked: boolean, data? }>) {
    this._fullList = list;
  }

  public onChange: Function;
  public onTouched: Function;

  set value(value) {
    this._checkedList = value;
    if (this.onChange) {
      this.onChange(this._checkedList);
    }
  }

  get value(): any[] {
    // if (this._fullList) {
    //   return this._fullList.reduce((result, item) => {
    //     console.log(item);
    //     if (item.checked) {
    //       result.push(item.data);
    //     }
    //     return result;
    //   }, []);
    // }
    return this._checkedList;
  }

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.value = this._fullList.reduce((array, item) => {
      if (item.checked) {
        array.push(item.data);
      }
      return array;
    }, []);
  }

  writeValue(value: any[]) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
