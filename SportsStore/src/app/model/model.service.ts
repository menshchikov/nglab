import { Injectable } from '@angular/core';
import { Product } from './product'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  private products:Product[] = [
    new Product(1, "Product 1" , "Category 1", "Product 1 Cat 1",100),
  	new Product(2, "Product 2" , "Category 1", "Product 2 Cat 1",100),
  	new Product(3, "Product 3" , "Category 1", "Product 3 Cat 1",100),
  	new Product(4, "Product 4" , "Category 2", "Product 4 Cat 2",100),
  	new Product(5, "Product 5" , "Category 2", "Product 5 Cat 2",100)
  ];

  getProducts(): Observable<Product[]>{
  	return Observable.from([this.getProducts]);
  }
}
