import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, ImageComponent],
  exports: [SearchComponent, ImageComponent]
})
export class ComponentsModule { }
