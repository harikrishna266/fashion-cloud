import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { URLSearchParams } from '@angular/http'
import { SearchResultModel } from './search-result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flicker-search',
  templateUrl: './flicker-search.component.html',
  styleUrls: ['./flicker-search.component.css']
})
export class FlickerSearchComponent implements OnInit {


  public results:SearchResultModel[] = [];


  constructor(public searchSer:SearchService, public router: Router) { }

  ngOnInit() {
  }
  makeSearch(searchData) {
    let params = new URLSearchParams();
    for(let key in searchData){
      if(searchData[key]) params.set(key, searchData[key]) 
    }
    this.searchSer.search(params).subscribe(res => {
      let imge = res.photos.photo[0];
      let  newSearch =  new SearchResultModel(this.results.length,searchData.tags,imge.url_q,imge.ownername,imge.dateupload,imge.datetaken,imge.view,searchData.userid);
      this.results = [...this.results,newSearch];
    });
  }

  ViewDetails(search:SearchResultModel) {
      this.router.navigate(['/view', search.tag,search.userid])    
  }

}  
