import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model'
import {ProductRepository} from '../model/model.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
public selectedCategory = null;
  constructor(private productRepository:ProductRepository) { 

  }

  getProducts():Product[]{
  	return this.productRepository
  	.getProducts(this.selectedCategory);
  }

  getCategories():string[]{
  	return this.productRepository.getCategories();
  }

  changeCategory(newCategory?:string){
  	this.selectedCategory = newCategory;
  }

  ngOnInit() {
  	let dt = new Date();
  	console.log(''+dt.toISOString()+': store onInit');
  }

}
