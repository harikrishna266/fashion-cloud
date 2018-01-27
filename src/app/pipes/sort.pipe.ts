import { Pipe, PipeTransform } from '@angular/core';
import { SearchResultModel } from '../flicker-search/search-result.model';
@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(array: Array<SearchResultModel>, args: string, order: any): Array<SearchResultModel> {
    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
         return (order[args] === false) ?  -1 : 1 ;
      } else if (a[args] > b[args]) {
        return (order[args] === false) ?  1 : -1 ;
      } else {
        return 0;
      }
    });
    return array;
  }
}
