import { Injectable } from '@angular/core';
import { Environment} from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class InsertService {

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http: HttpClient) {}

  private requestMapping = 'category/';

  private url = Environment.apiUrl + this.requestMapping;

  public getAllCategories(){
    //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
    return this.http.get(this.url+'/');
  };
}
