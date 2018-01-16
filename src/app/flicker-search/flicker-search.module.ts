import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickerSearchComponent } from './flicker-search.component';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
    {path:'', component: FlickerSearchComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FlickerSearchComponent]
})
export class FlickerSearchModule { }
