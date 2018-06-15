import { Component, OnInit } from '@angular/core';
import { InsertService } from './insert.service';
import {Router} from '@angular/router';
import {ProductCategory} from '../Models/product-category';


@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

categories: ProductCategory[] = new Array<ProductCategory>();

  constructor(private router: Router, private service: InsertService) { }

  ngOnInit() {
    
    this.service.getAllCategories().subscribe(
      (data: ProductCategory[] ) => {
        this.categories = data;
      }
    ); 

  }

}
