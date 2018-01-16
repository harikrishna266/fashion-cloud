import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';



import { ComponentsModule } from './components/components.module';

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
    BrowserAnimationsModule,
    ComponentsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
