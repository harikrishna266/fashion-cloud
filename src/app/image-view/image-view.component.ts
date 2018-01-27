import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../core/flicker.service';
import { FlickerImageModel } from './flicker-image.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})

export class ImageViewComponent implements OnInit {

  public searchResults: FlickerImageModel[] = [];
  public error = '';
  public getParams;
  public currentPage;
  public totalRecords;
  public recordsPerPage = 10;

  constructor( private route: ActivatedRoute, public router: Router, public searchServ: FlickerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentPage = (params.page) ? + params.page : 1;
      this.getParams = params;
      this.getAllImages(params);
    });
  }
  showErrorIfEmptyResults(photos) {
   if (typeof photos.photo === 'undefined') {
        this.error = 'No images found!';
        return;
    } else {
      return true;
    }
  }
  getAllImages(params) {
    this.searchServ
    .searchAllImage(params)
    .subscribe(
      (res) => {
        console.log(res);
        if (this.showErrorIfEmptyResults(res)) {
          this.totalRecords = res.total;
          this.arrangePhotos(res);
        }
      },
      (e) => {
        this.error = 'something went wrong';
      });
  }
  navigateTo(page) {
    if (this.getParams['user_id'] !== undefined) {
      this.router.navigate(['/view', this.getParams.tags, page, this.getParams.user_id]);
    }else {
      this.router.navigate(['/view', this.getParams.tags, page ]);
    }
  }

  arrangePhotos(allImage) {
    this.searchResults = [];
    for (const image of allImage.photo) {
        const datetaken = image.datetaken ? new Date(image.datetaken).getTime() : 0;
        const newSearch =  new FlickerImageModel(
                                             allImage.searchData.tags,
                                             image.url_q,
                                             image.ownername,
                                             image.dateupload,
                                             datetaken,
                                             image.views,
                                             allImage.searchData.user_id);
        this.searchResults = [...this.searchResults, newSearch];
      }
    }
}
