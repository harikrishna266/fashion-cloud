import { Pipe, PipeTransform } from '@angular/core';
import { SearchResultModel } from '../flicker-search/search-result.model';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<SearchResultModel>, args: string): Array<SearchResultModel> {
    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
