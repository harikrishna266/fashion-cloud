import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../core/flicker.service';
import { FlickerImageModel } from './flicker-image.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})

export class ImageViewComponent implements OnInit {

  public tags: string;
  public userid: string;
  public searchResults: FlickerImageModel[] = [];

  constructor( private route: ActivatedRoute, public searchServ: FlickerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getAllImages(params);
    });
  }
  getAllImages(params) {
    this.searchServ
    .search(params)
    .subscribe(res => {
      for (const imge  of res.photos.photo) {
        const  newSearch =  new FlickerImageModel(params.tags,
                                                imge.url_q,
                                                imge.ownername,
                                                imge.dateupload,
                                                imge.datetaken,
                                                imge.view,
                                                params.userid);
        this.searchResults = [...this.searchResults, newSearch];
      }
    });
  }
}
