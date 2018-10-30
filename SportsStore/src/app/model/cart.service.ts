import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
	providedIn: 'root'
})
export class CartService {
	public lines: CartLine[] = [];
	public itemCount: number = 0;
	public cartPrice: number = 0;

	// get itemCount():number{
	// 	let count = 0;
	// 	this.lines.forEach(cl => count += cl.quantity);
	// 	return count;
	// }

	// get cartPrice():number{

	// }

	constructor() { }

	addLine(product: Product, quantity: number = 1) {
		let line = this.lines
			.find(line => line.product.id == product.id);
		if (line != undefined) {
			line.quantity += quantity;
		} else {
			this.lines
				.push(new CartLine(product, quantity));
		}
		this.recalculate();
	}

	updateQuentity(product: Product, quantity: number) {
		let line = this.lines
			.find(line => line.product.id == product.id);
		if (line != undefined) {
			line.quantity = Number(quantity);
		}
		this.recalculate();
	}

	removeLine(prodId: number) {
		let index = this.lines
			.findIndex(line => line.product.id == prodId);
		this.lines.splice(index);
		this.recalculate();
	}

	clear() {
		this.lines = [];
		this.itemCount = 0;
		this.cartPrice = 0;
	}

	private recalculate() {
		this.itemCount = 0;
		this.cartPrice = 0;
		this.lines.forEach(l => {
			this.itemCount += l.quantity;
			this.cartPrice += (l.quantity * l.product.price);
		});
	}
}

export class CartLine {
	constructor(public product: Product,
		public quantity: number) { }

	get lineTotal() {
		return this.quantity * this.product.price;
	}
}