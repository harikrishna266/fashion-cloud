import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { SearchResultModel } from './search-result.model';
import { Router } from '@angular/router';
import { FlickerService } from '../core/flicker.service';

@Component({
  selector: 'app-flicker-search',
  templateUrl: './flicker-search.component.html',
  styleUrls: ['./flicker-search.component.css'],
})

export class FlickerSearchComponent implements OnInit {

  public results: SearchResultModel[] = [];
  public error: string;
  public sortBy;

  constructor(public searchSer: FlickerService, public router: Router) { }

  ngOnInit() { }

  makeSearch(searchData) {
    this.error = '';

    this.searchSer.search(searchData).subscribe(res => {
      if (res.photos.total === 0) {
        this.error = 'No images found with this search!';
        return;
      }
      const imge = res.photos.photo[0];
      const newSearch =  new SearchResultModel(this.results.length,
                                             searchData.tags,
                                             imge.url_q,
                                             imge.ownername,
                                             imge.dateupload,
                                             imge.datetaken,
                                             imge.view,
                                             searchData.userid);
      this.results = [...this.results, newSearch];
    }, (e) => {
      this.error = 'something went wrong';
    });
  }
  sort(type) {
    this.sortBy = type;
  }

  ViewDetails(search: SearchResultModel) {
    if (search.userid !== undefined) {
      this.router.navigate(['/view', search.tag, search.userid]);
    }else {
      this.router.navigate(['/view', search.tag]);
    }
  }
}
