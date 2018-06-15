import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';

@Injectable()
export class RegisterService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

  private requestMapping = 'auth/';

  private url = Environment.apiUrl + this.requestMapping;
  public search(email:string,firstName:String,lastName:String,password:String,userRoleId:string, country:string,province:string,
    canton:string,district:string,postalCode:string){
    return this.http.get(this.url +firstName+ '/' +lastName+ '/' +password+ '/' +userRoleId+ '/' +country+ '/' +province+ '/' +canton+ '/' +district+ '/' +postalCode);
  }
}