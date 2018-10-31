import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {ModelService} from './model/model.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule} from './store/store.module';

//import { CartComponent } from './cart/cart.component';
//import { CounterDirective } from './counter.directive';

@NgModule({
  declarations: [
    AppComponent,
    //CartDetailComponent,
    //CheckoutComponent,
    //CartComponent//,    CounterDirective    
  ],
  imports: [BrowserModule, StoreModule
  ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
