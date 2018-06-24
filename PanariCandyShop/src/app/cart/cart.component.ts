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
      localStorage.setItem('carrito',JSON.stringify(data));
      
    });
  }

  delete(detailId){
  
    this.service.delete(detailId).subscribe(
      (data: OrderDetail[]) => {
        this.orderDetails = data;
      }
    );

}

pay(){
  this.service.pay().subscribe(
    (data: string)=>{
      this.confirm = data;
      alert(this.confirm);
    }
  )
}

}
