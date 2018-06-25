import { Component, OnInit } from '@angular/core';
import { FillCartService } from '../cart/fill-cart-service';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private service: FillCartService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
  }

  add(product, units) {
    if (localStorage.getItem('sesion') === null) {
      this.service.getAll().subscribe(
        (data: Product[]) => {
          this.products = data;
        }
      );
      this.service.getOrderDetail(product, units).subscribe(
        (data: OrderDetail) => {
          if (localStorage.getItem('carritoNull') === null) {
            var orders = new Array<OrderDetail>();
            orders[0] = data;
            console.log(data + ' order');
            localStorage.setItem('carritoNull', JSON.stringify(orders));
          } else {
            var cont = localStorage.getItem('carritoNull').length;
            var orders = new Array<OrderDetail>();
            orders = JSON.parse(localStorage.getItem('carritoNull'));
            orders.push(data);
            localStorage.setItem('carritoNull', JSON.stringify(orders));
          }
        }
      );
    } 
    
    else {
      this.service.add(product, units).subscribe(
        (data: OrderDetail[]) => {
          this.orderDetails = data;
        }
      );
    }
  }
}
