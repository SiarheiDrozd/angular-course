import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let result = '';
    if (value > 0) {
      const HOURS = Math.floor(value / 60);
      result +=  HOURS > 0 ? HOURS + 'h ' : '';
      result += value - HOURS * 60 + 'min';
    }
    return result;
  }
}
