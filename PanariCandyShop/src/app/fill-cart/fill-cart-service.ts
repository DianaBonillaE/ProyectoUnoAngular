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

  private requestMapping = 'product/';

  private url = Environment.apiUrl + this.requestMapping;
  public showCart(productId: string){
    //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
    return this.http.get(this.url  + productId);
  }

};