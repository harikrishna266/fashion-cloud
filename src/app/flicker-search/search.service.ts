import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {



  constructor(public http: Http ) { }

  search(params) {
    return this.http.get(`${environment.FlickerAPI}&${params}`)
      .map(res =>  res.json())
  }

}
