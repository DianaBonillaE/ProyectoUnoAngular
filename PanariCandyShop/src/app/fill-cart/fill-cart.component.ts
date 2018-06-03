import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { FillCartService } from '../fill-cart/fill-cart-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fill-cart',
  templateUrl: './fill-cart.component.html',
  styleUrls: ['./fill-cart.component.css']
})
export class FillCartComponent implements OnInit {
  
product: Product = new Product;

  constructor(private router:Router, private service: FillCartService) { }

  ngOnInit() {
  }

  showCart(){
    this.service.showCart(this.product.productId).subscribe(
      (data: Product) => {
        this.product = data;
      }
    );
  }
}
