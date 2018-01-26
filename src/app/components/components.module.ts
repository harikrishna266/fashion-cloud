import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ImageComponent } from './image/image.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  declarations: [SearchComponent, ImageComponent],
  exports: [SearchComponent, ImageComponent]
})
export class ComponentsModule { }
