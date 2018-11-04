import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from './data.service';
import {CartService} from './cart.service';
import {ProductsService} from './products.service';
import {OrderService} from './order.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [DataService, ProductsService, CartService, OrderService]
})
export class ModelModule {
}
