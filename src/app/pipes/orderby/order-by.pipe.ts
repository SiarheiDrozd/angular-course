import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], filterProp: string, args?: any): any {
    return array.sort((itemA, itemB) => {
      if (itemA[filterProp] > itemB[filterProp]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
