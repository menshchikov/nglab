import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import { ModelModule } from '../model/model.module';
import { FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule, ModelModule, BrowserModule, FormsModule
  ],
  declarations: [StoreComponent],
  exports:[StoreComponent]
})
export class StoreModule { }