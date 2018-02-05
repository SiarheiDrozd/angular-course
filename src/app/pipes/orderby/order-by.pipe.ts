import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], filterProp: string, args?: any): any {
    if (!items) {
      return [];
    }

    return items.sort((itemA, itemB) => {
      return itemA[filterProp] > itemB[filterProp] ? 1 : -1;
    });
  }
}
