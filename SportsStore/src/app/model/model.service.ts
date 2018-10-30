import { Injectable } from '@angular/core';
import { Product } from './product.model'
import { Observable, from } from 'rxjs'
//import { from } from "rxjs/add/observable/from";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ModelService {

  constructor() { }

  private products:Product[] = [
    new Product(1, "Product 1" , "Category 1", "Product 1 Cat 1",100),
  	new Product(2, "Product 2" , "Category 1", "Product 2 Cat 1",110),
  	new Product(3, "Product 3" , "Category 1", "Product 3 Cat 1",120),
  	new Product(4, "Product 4" , "Category 2", "Product 4 Cat 2",130),
  	new Product(5, "Product 5" , "Category 2", "Product 5 Cat 2",140)
  ];

  getProducts(): Observable<Product[]>{
  	return from([this.products]);
  }
}

@Injectable()
export class ProductRepository{
	private products: Product[] = [];
	private categories: string[] = [];

	constructor(private modelService:ModelService){
		modelService.getProducts()
		.subscribe(data => {
				this.products = data;
				this.categories = data.map(p => p.category)
				.filter((c, index, array) => array.indexOf(c) == index)
				.sort();
			});
	}

	getProducts(category:string=null):Product[]{
		return this.products
		.filter(p => category == null || category == p.category);
	}

	getProduct(id:number):Product{
		return this.products.find(p => p.id == id);
	}

	getCategories(): string[]{
		return this.categories;
	}
}
