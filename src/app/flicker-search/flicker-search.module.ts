import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickerSearchComponent } from './flicker-search.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MatButtonModule } from '@angular/material/button';

import { ComponentsModule } from '../components/components.module';

import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path: '', component: FlickerSearchComponent}
];

import { SortPipe } from '../pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HttpModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FlickerSearchComponent,  SortPipe]
})
export class FlickerSearchModule { }
