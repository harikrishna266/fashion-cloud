import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewComponent } from './image-view.component';
import { SearchService } from '../flicker-search/search.service';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
    {path:':tags/:userid', component: ImageViewComponent},
    {path:':tags', component: ImageViewComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImageViewComponent],
  
})
export class ImageViewModule { }
