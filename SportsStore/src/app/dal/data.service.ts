import {Injectable} from '@angular/core';
import {Product} from './model';
import {from, Observable} from 'rxjs';
// import { from } from "rxjs/add/observable/from";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {

    constructor() {
    }

    private products: Product[] = [
        new Product(1, 'Product 1', 'Category 1', 'Product 1 Cat 1', 110),
        new Product(2, 'Product 2', 'Category 1', 'Product 2 Cat 1', 120),
        new Product(3, 'Product 3', 'Category 1', 'Product 3 Cat 1', 130),
        new Product(4, 'Product 4', 'Category 2', 'Product 4 Cat 2', 140),
        new Product(5, 'Product 5', 'Category 2', 'Product 5 Cat 2', 150)
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}

