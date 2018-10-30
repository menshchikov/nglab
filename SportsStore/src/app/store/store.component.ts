import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model'
import {ProductRepository} from '../model/model.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private productRepository:ProductRepository) { 

  }

  getProducts():Product[]{
  	return this.productRepository.getProducts();
  }

  getCategories():string[]{
  	return this.productRepository.getCategories();
  }

  ngOnInit() {
  }

}
