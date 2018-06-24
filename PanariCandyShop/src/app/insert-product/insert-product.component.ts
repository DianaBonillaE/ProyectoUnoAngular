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
selectedFiles: FileList;
currentFileUpload: File;
products: Product[] = new Array<Product>();
product: Product = new Product();

  constructor(private router: Router, private service: InsertService) { }

  ngOnInit() {
    
  this.service.getCategories().subscribe(
     (data: ProductCategory[] ) => {
        this.categories = data;
      }
    ); 

  }


  createProduct(): void {

    this.currentFileUpload = this.selectedFiles.item(0);
    this.service.createProduct(this.product, this.currentFileUpload)
    .subscribe(data => {
      console.log(this.product.productCategory.productCategoryId);
    });
    }
    //FILE IS SELECTED
    selectFile(event) {
    this.selectedFiles = event.target.files;
    }


}
