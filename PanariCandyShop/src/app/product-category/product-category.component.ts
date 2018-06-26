import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../product-category/product-category.service';
import { User } from "../Models/user";
import {Router} from '@angular/router';
import { ProductCategory } from '../Models/product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productCategory: ProductCategory= new ProductCategory();
  productCategories: ProductCategory[]= new Array<ProductCategory>();
  productCategoriesNotProduct: ProductCategory[]= new Array<ProductCategory>();

  constructor(private router: Router, private service: ProductCategoryService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe(
      (data: ProductCategory[])=>{
        this.productCategories = data;
      }
    )

    this.service.getAllCategoriesNotProduct().subscribe(
      (data: ProductCategory[])=>{
        this.productCategoriesNotProduct = data;
      }
    )
  }

  insert(){
    alert('Usted ha ingresado correctamente '+this.productCategory.productCategoryName);
    this.service.insertCategory(this.productCategory).subscribe(
      (data:ProductCategory) =>{
        this.productCategory = data;
      }
    )
  }
  update(){
    alert('Usted ha actualizado correctamente '+this.productCategory.productCategoryName);
    this.service.updateCategory(this.productCategory.productCategoryId,this.productCategory).subscribe(
      (data:ProductCategory) =>{
        this.productCategory = data;
      }
    )
  }
  delete(){
    alert('Usted ha eliminado correctamente '+this.productCategory.productCategoryName);
    this.service.deleteCategory(this.productCategory.productCategoryId).subscribe(
      (data:ProductCategory) =>{
        this.productCategory = data;
    })
  }
}
