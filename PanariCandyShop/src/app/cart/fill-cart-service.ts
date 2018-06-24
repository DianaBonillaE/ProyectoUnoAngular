import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';

@Injectable()
export class FillCartService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

  private requestMapping = 'cart/';

  private url = Environment.apiUrl + this.requestMapping;
   
  public getAll(){

      return this.http.get(Environment.apiUrl + 'product/');
  //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
  }

  public add(productID, units: string){
    return this.http.get(this.url + "addCart/" + productID + "/"+units);
  };

  public getCart() {
    var sesion = localStorage.getItem('sesion');
    if(sesion==null || sesion==''){
      return this.http.get(this.url+'onCart/'+'vacio');
    }else{
      return this.http.get(this.url +'onCart/'+sesion);
    }
  };
  public delete(detailId){
    var sesion = localStorage.getItem('sesion');
    if(sesion==null || sesion==''){
      return this.http.get(this.url+"delete/" +detailId +'/'+'vacio');
    }else{
      return this.http.get(this.url +"delete/" +detailId +'/'+sesion);
    }
  };

  public pay(){
    var order = JSON.parse(localStorage.getItem('carrito'));
    return this.http.post(this.url+"pay",order);
  }
};