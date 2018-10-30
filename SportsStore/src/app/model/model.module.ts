import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelService, ProductRepository } from './model.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ModelService, ProductRepository]
})
export class ModelModule { }
