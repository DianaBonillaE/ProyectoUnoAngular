import { Injectable } from '@angular/core';
import { Environment} from '../app.environment';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Product } from '../Models/product';

@Injectable()
export class InsertService {

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http: HttpClient) {}

  private requestMapping = 'product/';

  private url = Environment.apiUrl + this.requestMapping;

  //public getAllCategories(){
    //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
 //   return this.http.get(this.url+'/');
 // };

  public createProduct(product: Product, file: File) {
    let formdata: FormData = new FormData();
    
    //ATTACH THE FILE AND THE PROGRAM TO SEND IT TO THE API
    formdata.append("image", file);
    //DOCUMENT DATA
    formdata.append("productName", product.productName);
    formdata.append("price", product.price);
    formdata.append("description", product.description);
    formdata.append("salesTax", product.salesTax);
    formdata.append("productCategory",product.productCategory.productCategoryId);
    
    //CREATE THE REQUEST OBJECT WITH THE PARAMETERS (TYPE, URL, DATA, RESPONSE DATA)
    const req = new HttpRequest("POST", this.url + "save", formdata, {
    responseType: "json"
    });
    return this.http.request(req);
    }

    public getCategories(){
      return this.http.get(Environment.apiUrl+'category/');
    }
}
