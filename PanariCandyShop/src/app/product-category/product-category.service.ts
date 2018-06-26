import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';
import { ProductCategory } from '../Models/product-category'

@Injectable()
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  private requestMapping = 'category/';

  private url = Environment.apiUrl + this.requestMapping;

  public insertCategory (productCategory:ProductCategory){
    console.log(productCategory.productCategoryId+ "  "+productCategory.productCategoryName);
    return this.http.post(this.url+'insert/',productCategory);
  }

  public getAllCategories(){
    return this.http.get(Environment.apiUrl+'category/');
  }

  public getAllCategoriesNotProduct(){
    return this.http.get(Environment.apiUrl+'category/lista');
  }

  public updateCategory(productCategoryId:string,productCategory:ProductCategory){
    return this.http.put(this.url+'/'+productCategoryId,productCategory);
  }

  public deleteCategory(productCategoryId:string){
    return this.http.delete(this.url+productCategoryId)
  }

}
