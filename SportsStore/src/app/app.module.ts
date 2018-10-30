import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {ModelService} from './model/model.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { StoreComponent } from './store/store.component';
import {StoreModule} from './store/store.module';
//import { CounterDirective } from './counter.directive';

@NgModule({
  declarations: [
    AppComponent//,    CounterDirective    
  ],
  imports: [BrowserModule, StoreModule
  ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
