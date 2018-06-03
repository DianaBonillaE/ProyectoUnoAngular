import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../cart/product-service';
import {Product} from '../Models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products: Product[] = new Array<Product>();
  constructor(private router:Router, private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
