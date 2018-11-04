import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {ModelModule} from '../dal/model.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CounterDirective} from '../counter.directive';
import {CartSummaryComponent} from '../cart-summary/cart-summary.component';
import {CartDetailComponent} from '../cart-detail/cart-detail.component';
import {CheckoutComponent} from '../checkout/checkout.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule, ModelModule, BrowserModule,
        FormsModule, RouterModule
    ],
    declarations: [
        StoreComponent
        , CounterDirective
        , CartSummaryComponent
        , CartDetailComponent
        , CheckoutComponent],
    exports: [StoreComponent
        , CartDetailComponent
        , CheckoutComponent]
})
export class StoreModule {
}
