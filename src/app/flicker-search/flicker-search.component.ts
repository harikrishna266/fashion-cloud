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

  showErrorIfEmptyResults(photos) {
   if (typeof photos === 'undefined') {
        this.error = 'No images found with this search!';
        return;
    } else {
      return true;
    }
  }
  arrangePhotos(image,searchData) {
    const newSearch =  new SearchResultModel(this.results.length,
                                             searchData.tags,
                                             image.url_q,
                                             image.ownername,
                                             image.dateupload,
                                             image.datetaken,
                                             image.view,
                                             searchData.userid);
    this.results = [...this.results, newSearch];
  }

  makeSearch(searchData) {
    this.error = '';
    this.searchSer.search(searchData)
    .map(res =>  res.photos.photo[0])
    .subscribe(
      (res) => {
        if (this.showErrorIfEmptyResults(res)) {
          this.arrangePhotos(res,searchData);
        } 
      },
      (e) => {
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
