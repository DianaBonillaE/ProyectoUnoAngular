import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  private requestMapping = 'product/';

  private url = Environment.apiUrl + this.requestMapping;

  public getAllProducts(){
    return this.http.get(Environment.apiUrl+'product/');
  }

}
