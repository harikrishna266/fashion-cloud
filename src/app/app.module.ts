import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';



//lazy load routes
let routes: Routes = [
    {path:'', redirectTo: "search", pathMatch: 'full'},
    {path: 'search', loadChildren: './flicker-search/flicker-search.module#FlickerSearchModule'},
    {path: 'view', loadChildren: './image-view/image-view.module#ImageViewModule'}
]



@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
