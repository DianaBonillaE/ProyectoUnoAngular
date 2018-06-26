import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
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
  constructor(private router: Router, private service: FillCartService) { }

  ngOnInit() {
    if (localStorage.getItem('sesion') === null) {
      this.orderDetails = JSON.parse(localStorage.getItem('carritoNull'));
    } else if (localStorage.getItem('carritoNull') != null) {
        this.service.addCart().subscribe(
          data => {
            localStorage.removeItem('carritoNull');
          }
        );
        this.service.getCart().subscribe((data: OrderDetail[]) => {
          this.orderDetails = data;
          location.href ='http://localhost:4200/search-cart';
        }
        );
      }
      this.service.getCart().subscribe((data: OrderDetail[]) => {
        this.orderDetails = data;
      }
      );   
  }

  delete(detailId) {
    if (localStorage.getItem('sesion') === null) {
      var param = new Array<OrderDetail>();
    param = JSON.parse(localStorage.getItem('carritoNull'));
    var i;
      for (i = 0; i < param.length; i++) {
          if(param[i].orderDetail===detailId){
            console.log('entro');
            param.splice(i,1);
            
            localStorage.setItem('carritoNull',JSON.stringify(param));
            location.href ='http://localhost:4200/search-cart';
            break;
          }
      }
    
  } else {
      this.service.delete(detailId).subscribe(
        (data: OrderDetail[]) => {
          this.orderDetails = data;
        }
      );
    }
  }

  pay() {
    this.service.pay().subscribe(
      (data: string) => {
        this.confirm = data;
        alert(this.confirm);
      }
    )
  }

}
