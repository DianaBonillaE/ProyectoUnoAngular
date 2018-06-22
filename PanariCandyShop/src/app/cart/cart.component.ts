import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../cart/product-service';
import {Product} from '../Models/product';
import { OrderDetail } from '../Models/orderDetail';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
orderDetails: OrderDetail[] = new Array<OrderDetail>();
  constructor(private router:Router, private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data: OrderDetail[]) => {
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

}
