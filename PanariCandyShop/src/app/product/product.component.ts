import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {Router} from '@angular/router';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]= new Array<Product>();

  constructor(private router: Router, private service: ProductService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      (data: Product[])=>{
        this.products = data;
      }
    )
  }

}
