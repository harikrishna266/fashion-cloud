import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FlickerService {

  constructor(public http: Http ) { }

  makeQueryString(searchData) {
    const params = new URLSearchParams();
    let key: string;
    for (key in searchData) {
      if (searchData[key]) {
          params.set(key, searchData[key]);
        }
    }
    return params.toString();
  }
  searchFirstImage(params) {
    const api = this.makeQueryString(params);
    return this.http.get(`${environment.FlickerAPI}&${api}`)
      .map(res => res.json())
      .map(res => {
      return {
        photo: res.photos.photo[0],
        searchData: params,
        total: res.photos.total,
      };
    });
  }
  searchAllImage(params) {
    const api = this.makeQueryString(params);
    return this.http.get(`${environment.FlickerAPI}&${api}`)
      .map(res =>  res.json())
      .map(res =>  {
      return {
        photo: res.photos.photo,
        searchData: params,
        total: res.photos.total,
      };
    });
  }

}
