import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  private _value: string;

  public onChange: Function;
  public onTouched: Function;

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    if (value !== this._value) {
      this._value = value;
      if (this.onChange) {
        this.onChange(this._value);
      }
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
