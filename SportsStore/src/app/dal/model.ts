export class Product {
    constructor(public id?: number,
                public name?: string,
                public category?: string,
                public description?: string,
                public price?: number) {
    }
}

export class Order {

    public id: number;
    public name: string;
    public address: string;
    public zip: string;
    public city: string;
    public state: string;
    public country: string;
    public shipped = false;
    public cart: Cart;

    constructor() {
    }
}

export class CartLine {
    constructor(public product: Product,
                public quantity: number) {
    }

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}

export class Cart {

    public lines: CartLine[] = [];
    public itemCount = 0;
    public cartPrice = 0;
}
