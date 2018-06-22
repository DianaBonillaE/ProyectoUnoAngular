import { Component, OnInit } from '@angular/core';
import { FillCartService } from '../cart/fill-cart-service';
import {Router} from '@angular/router';
import { Product } from '../Models/product';
import { OrderDetail } from '../Models/orderDetail';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  orderDetails: OrderDetail[] = new Array<OrderDetail>();
  products: Product[] = new Array<Product>();

  constructor(private router:Router, private service: FillCartService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
  }
   
  add(productI,units){
    this.service.add(productI,units).subscribe(
      (data: OrderDetail[]) => {
        this.orderDetails = data;
      }
    );

}
}
