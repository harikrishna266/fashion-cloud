import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewComponent } from './image-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
    {path: ':tags', component: ImageViewComponent},
    {path: ':tags/:userid', component: ImageViewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImageViewComponent]
})
export class ImageViewModule { }
