import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { FlickerService } from './core/flicker.service';

import { ComponentsModule } from './components/components.module';

import { HttpModule } from '@angular/http';
 
//lazy load routes
let routes: Routes = [
    {path:'', redirectTo: "search", pathMatch: 'full'},
    {path: 'search', loadChildren: './flicker-search/flicker-search.module#FlickerSearchModule'},
    {path: 'view', loadChildren: './image-view/image-view.module#ImageViewModule'}
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FlickerService],
  bootstrap: [AppComponent],


})
export class AppModule { }
