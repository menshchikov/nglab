import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelService, ProductRepository } from './model.service';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ModelService, ProductRepository, CartService]
})
export class ModelModule { }
