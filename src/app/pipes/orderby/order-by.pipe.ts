import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], filterProp: string, args?: any): any {
    console.log(items);
    if (!items)
      return [];

    return items.sort((itemA, itemB) => {
      if (itemA[filterProp] > itemB[filterProp]) {
        return 1;
      } else if (itemA[filterProp] < itemB[filterProp]){
        return -1;
      } else {
        return 0;
      }
    });
  }
}
