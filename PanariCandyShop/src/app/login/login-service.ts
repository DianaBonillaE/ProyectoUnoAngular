import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';

@Injectable()
export class LoginService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

  private requestMapping = 'auth/';

  private url = Environment.apiUrl + this.requestMapping;
  
  public search(email: string, password: string){
    //return this.http.post(this.url, {params: {"publicador": paramPub, "libro":paramLib}});
    return this.http.get(this.url  + email + '/' + password, {responseType: 'text'});
  }

};