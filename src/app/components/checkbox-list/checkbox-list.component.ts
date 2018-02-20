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
  };

  public onChange: Function;
  public onTouched: Function;

  set value(value) {
    this._checkedList = value;
  }
  get value() {
    if (this._fullList) {
      return this._fullList.reduce((result, item) => {
        if (item.checked) {
          result.push(item.data);
        }
        return result;
      }, [])
    }
    return [];
  }
  constructor() {
  }

  ngOnInit() {
    // setInterval(context => context._checkedList.push({}), 1000, this);
  }

  click() {
    let result = this._fullList.reduce((result, item) => {
      if (item.checked) {
        result.push(item.data);
      }
      return result;
    }, []);
    console.log(result);
  }

  writeValue(value: any[]) {
    this.value = value;
    // this.onChange(this.value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
