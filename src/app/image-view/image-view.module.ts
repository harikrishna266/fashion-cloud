import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewComponent } from './image-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {path: ':tags', component: ImageViewComponent},
    {path: ':tags/:page', component: ImageViewComponent},
    {path: ':tags/:page/:user_id', component: ImageViewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImageViewComponent]
})
export class ImageViewModule { }
