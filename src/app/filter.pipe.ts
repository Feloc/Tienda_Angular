import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items || !searchText) {
      return items;
  }

      return items.filter(it => it.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
}


//transform(value: any, args?: any): any {
  //return null;
//}
//if(!items) return [];


//return items.filter(it => it[field] == value);
//.filter(it => it.length > 7);
//  transform(items: any[], field: string, value: string): any[] {
