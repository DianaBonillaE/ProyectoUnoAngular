import { Component, OnInit } from '@angular/core';
import { InsertService } from './insert.service';
import {Router} from '@angular/router';
import {ProductCategory} from '../Models/product-category';
import { Product } from '../Models/product';


@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

categories: ProductCategory[] = new Array<ProductCategory>();

products: Product[] = new Array<Product>();
product: Product = new Product();
  constructor(private router: Router, private service: InsertService) { }

  ngOnInit() {
    
    //this.service.getAllCategories().subscribe(
    //  (data: ProductCategory[] ) => {
   //     this.categories = data;
   //   }
   // ); 

  }
  insert(){
    this.service.insert(this.product).subscribe(
      (data: Product[] ) => {
        this.products = data;
      }
    );
  }


}
