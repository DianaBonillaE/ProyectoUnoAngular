import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';

@Injectable()
export class ProductService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

  private requestMapping = 'product/';

  private url = Environment.apiUrl + this.requestMapping;

  public getAll() {
    var sesion = localStorage.getItem('sesion');
    if(sesion==null || sesion==''){
      return this.http.get(Environment.apiUrl +'cart/onCart/'+'vacio');
    }else{
      return this.http.get(Environment.apiUrl +'cart/onCart/'+sesion);
    }
  };
  public delete(detailId){
    var sesion = localStorage.getItem('sesion');
    if(sesion==null || sesion==''){
      return this.http.get(Environment.apiUrl +"cart/delete/" +detailId +'/'+'vacio');
    }else{
      return this.http.get(Environment.apiUrl +"cart/delete/" +detailId +'/'+sesion);
    }
  };
};