import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FlickerService {

  constructor(public http: Http ) { }

  makeQueryString(searchData) {
    let params = new URLSearchParams();
    for(let key in searchData){
      if(searchData[key]) params.set(key, searchData[key]) 
    }
    return params.toString();
  }
  search(params) {
    let api = this.makeQueryString(params);
    return this.http.get(`${environment.FlickerAPI}&${api}`)
      .map(res =>  res.json())
  }

}
