import {Component, OnInit, Input, HostBinding, forwardRef} from '@angular/core';
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

  inputValue: string;
  onChange: (val: string) => void;
  onTouched: (val: string) => void;

  get value(): string {
    return this.formatDate();
  }

  constructor() {
  }

  formatDate(): string {
    console.log(this.inputValue);
    return 'val';
  }

  writeValue(val: string) {
    console.log(val);
    this.inputValue = val;
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (val: string) => void): void {
    this.onTouched = fn;
  }
}
