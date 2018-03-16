import {AbstractControl} from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  if (control.value.match(new RegExp('^([0][1-9]|[1-3][0-9])\\.([0][0-9]|[1][0-2])\\.([1-2][0-9]{3})$'))) {
    return {validDate: true};
  }
  return null;
}
