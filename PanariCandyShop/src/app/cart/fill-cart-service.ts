import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Environment } from '../app.environment';
import { Product } from "../Models/product";
import { OrderDetail } from "../Models/orderDetail";

@Injectable()
export class FillCartService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private requestMapping = 'cart/';

  private url = Environment.apiUrl + this.requestMapping;

  public getAll() {

    return this.http.get(Environment.apiUrl + 'product/');
    //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
  }

  public add(product: Product, units: string) {
    var sesion = localStorage.getItem('sesion');
    return this.http.get(this.url + "addCart/" + product.productId + "/" + units + "/" + sesion);
  };

  public addCart() {

    let formdata: FormData = new FormData();
    var param = new Array<OrderDetail>();
    param = JSON.parse(localStorage.getItem('carritoNull'));
    var sesion = localStorage.getItem('sesion');
    var i;
    var productId;
    var units;
    for (i = 0; i < param.length; i++) {
      productId += "," + param[i].product.productId;
      units += "," + param[i].quantity;
    }

    formdata.append("productId", productId);
    formdata.append("units", units);
    formdata.append("sesion", sesion);

    const req = new HttpRequest("POST", this.url + "addCart", formdata, {
      responseType: "json"
    });
    return this.http.request(req);
    //  localStorage.removeItem('carritoNull');
    //  return this.http.post(this.url + "addCart", {params: {"orderDetails": param,"sesion": sesion}});

  };

  public getCart() {
    var sesion = localStorage.getItem('sesion');
    return this.http.get(this.url + 'onCart/' + sesion);
  };
  public delete(detailId) {
    var sesion = localStorage.getItem('sesion');
    return this.http.get(this.url + "delete/" + detailId + '/' + sesion);

  };

  public pay() {
    var sesion = localStorage.getItem('sesion');
    return this.http.get(this.url+ "pay/"+sesion);
  }

  public getOrderDetail(prod: Product, units: string) {

    return this.http.get(this.url + "getOrderDetail/" + prod.productId + "/" + units);
    //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
  }

};