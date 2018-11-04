import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from './data.service';
import {CartService} from './cart.service';
import {ProductsService} from './products.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [DataService, ProductsService, CartService]
})
export class ModelModule {
}
