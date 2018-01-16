import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickerSearchComponent } from './flicker-search.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ComponentsModule } from '../components/components.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchService } from './search.service';

let routes: Routes = [
    {path:'', component: FlickerSearchComponent},
]

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FlickerSearchComponent],
  providers: [ SearchService ]
})
export class FlickerSearchModule { }
