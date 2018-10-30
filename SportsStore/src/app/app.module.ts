import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModelService} from './model/model.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
