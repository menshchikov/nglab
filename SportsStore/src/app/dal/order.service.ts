import {Injectable} from '@angular/core';
import {CartService} from './cart.service';
import {Order} from './model';
import {Observable} from 'rxjs/index';
import {DataService} from './data.service';

@Injectable()
export class OrderService {
    private _order: Order;

    constructor(public cartService: CartService, public dataService: DataService) {
        this._order = new Order();
        this._order.cart = cartService.cart;
    }

    get order(): Order {
        return this._order;
    }

    clear() {
        this._order.id = null;
        this._order.name = this._order.address = this._order.city = null;
        this._order.state = this._order.zip = this._order.country = null;
        this.cartService.clear();
    }

    saveOrder(): Observable<Order> {
        return this.dataService.saveOrder(this._order);
    }
}
