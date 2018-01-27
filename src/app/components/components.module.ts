import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ImageComponent } from './image/image.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PagingComponent } from './paging/paging.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [SearchComponent, ImageComponent, PagingComponent],
  exports: [SearchComponent, ImageComponent, PagingComponent]
})
export class ComponentsModule { }
