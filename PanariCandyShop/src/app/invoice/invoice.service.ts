import { Injectable } from '@angular/core';
import { Environment} from '../app.environment';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';

@Injectable()
export class InvoiceService {
  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http: HttpClient) {}

  private requestMapping = 'cart/';

  private url = Environment.apiUrl + this.requestMapping;


}
