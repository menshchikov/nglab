import { Component, OnInit } from '@angular/core';
import {CartService} from '../model/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}
