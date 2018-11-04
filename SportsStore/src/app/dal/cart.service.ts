import {Injectable} from '@angular/core';
import {Cart, CartLine, Product} from './model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    // public lines: CartLine[] = [];
    // public itemCount = 0;
    // public cartPrice = 0;
    private _cart: Cart;

    // get itemCount():number{
    // 	let count = 0;
    // 	this.lines.forEach(cl => count += cl.quantity);
    // 	return count;
    // }

    // get cartPrice():number{

    // }

    constructor() {
        this._cart = new Cart();
    }

    get cart() {
        return this._cart;
    }

    addLine(product: Product, quantity: number = 1) {
        const line = this._cart.lines
            .find(l => l.product.id === product.id);
        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this._cart.lines
                .push(new CartLine(product, quantity));
        }
        this.recalculate();
    }


    updateQuantity(product: Product, quantity: number) {
        const line = this._cart.lines
            .find(l => l.product.id === product.id);
        if (line !== undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeLine(prodId: number) {
        const index = this._cart.lines
            .findIndex(line => line.product.id === prodId);
        this._cart.lines.splice(index);
        this.recalculate();
    }

    clear() {
        this._cart.lines = [];
        this._cart.itemCount = 0;
        this._cart.cartPrice = 0;
    }

    private recalculate() {
        this._cart.itemCount = 0;
        this._cart.cartPrice = 0;
        this._cart.lines.forEach(l => {
            this._cart.itemCount += l.quantity;
            this._cart.cartPrice += (l.quantity * l.product.price);
        });
    }
}

