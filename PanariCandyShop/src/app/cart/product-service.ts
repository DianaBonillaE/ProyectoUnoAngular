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
    return this.http.get(this.url +"onCart/");
  }

  public delete(productID){
    return this.http.get(this.url +"delete/" +productID);
  }
 

};