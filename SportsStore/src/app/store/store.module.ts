import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import { ModelModule } from '../model/model.module';
import { FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CounterDirective} from '../counter.directive';
import {CartComponent} from '../cart/cart.component';

@NgModule({
  imports: [
    CommonModule, ModelModule, BrowserModule, FormsModule
  ],
  declarations: [StoreComponent, CounterDirective,
  CartComponent],
  exports:[StoreComponent]
})
export class StoreModule { }
