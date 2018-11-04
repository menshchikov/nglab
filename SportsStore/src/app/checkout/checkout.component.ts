import {Component, OnInit} from '@angular/core';
import {OrderService} from '../dal/order.service';
import {NgForm} from '@angular/forms';
import {Order} from "../dal/model";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    isOrderSent: boolean;
    isSubmitted: boolean;
    public order: Order;

    constructor(public orderService: OrderService) {
        this.order = orderService.order;
    }

    submitOrder(form: NgForm) {
        this.isSubmitted = true;

        if(form.valid){
            this.orderService.saveOrder().subscribe( order => {
                this.orderService.clear();
                this.isOrderSent = true;
                this.isSubmitted = false;
            });
        }
    }

    ngOnInit() {
    }

}
