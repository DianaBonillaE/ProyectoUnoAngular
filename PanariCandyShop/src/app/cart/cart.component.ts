import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../Models/product';
import { OrderDetail } from '../Models/orderDetail';
import { FillCartService } from './fill-cart-service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
orderDetails: OrderDetail[] = new Array<OrderDetail>();
confirm: string;
  constructor(private router:Router, private service: FillCartService) { }

  ngOnInit() {
    this.service.getCart().subscribe((data: OrderDetail[]) => {
      this.orderDetails = data;
    });
  }

  delete(detailId){
  
    this.service.delete(detailId).subscribe(
      (data: OrderDetail[]) => {
        this.orderDetails = data;
      }
    );

}

pay(order){
  this.service.pay(order).subscribe(
    (data: string)=>{
      this.confirm = data;
    }
  )
}

}
