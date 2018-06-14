import { Component, OnInit } from '@angular/core';
import { FillCartService } from '../fill-cart/fill-cart-service';
import {Router} from '@angular/router';
import { Product } from '../Models/product';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  products: Product[] = new Array<Product>();
  product: Product = new Product;

  constructor(private router:Router, private service: FillCartService) { }

  ngOnInit() {
    this.service.productById(this.product.productId).subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
  }
   

}
