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
  public sortOrder: any = {
    view: false,
    photoDate: false,
    uploadedDate: false,
    ownerName: false
  };

  constructor(public searchSer: FlickerService, public router: Router) { }

  ngOnInit() { }

  showErrorIfEmptyResults(photos) {
   if (typeof photos.photo === 'undefined') {
        this.error = 'No images found!';
        return;
    } else {
      return true;
    }
  }
  arrangePhotos(image) {
    const datetaken = image.photo.datetaken ? new Date(image.photo.datetaken).getTime() : 0;
    console.log(image);
    const newSearch =  new SearchResultModel(image.total,
                                             image.searchData.tags,
                                             image.photo.url_q,
                                             image.photo.ownername,
                                             image.photo.dateupload,
                                             datetaken,
                                             image.photo.views,
                                             image.searchData.user_id);
    console.log(newSearch);
    this.results = [...this.results, newSearch];
  }

  makeSearch(searchData) {
    this.error = '';
    this.searchSer.search(searchData)
    .map(res =>  {
      return {
        photo: res.photos.photo[0],
        searchData: searchData,
        total: res.photos.total,
      };
    })
    .subscribe(
      (res) => {
        if (this.showErrorIfEmptyResults(res)) {
          this.arrangePhotos(res);
        }
      },
      (e) => {
        this.error = 'something went wrong';
      });
  }

  sort(type) {
    this.sortBy = type;
    this.sortOrder[type] = !this.sortOrder[type];
  }

  ViewDetails(search: SearchResultModel) {
    if (search.userId !== undefined) {
      this.router.navigate(['/view', search.tag, search.userId]);
    }else {
      this.router.navigate(['/view', search.tag]);
    }
  }
}
