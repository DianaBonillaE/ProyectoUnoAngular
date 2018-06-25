import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';
import { User } from '../Models/user';

@Injectable()
export class RegisterEmployeeService {

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http: HttpClient) {}

  private requestMapping = 'auth/';

  private url = Environment.apiUrl + this.requestMapping;

  public insertEmployee (email:string,firstName:String,lastName:String,password:String,userRoleId:string,nameRole:string,country:string, province:string,canton:string,district:string, postalCode:string){
    
    return this.http.get(this.url+'/'+email+'/'+firstName+'/'+lastName+'/'+password+'/'+0+'/'+nameRole+'/'+country+'/'+province+'/'+canton+'/'+district+'/'+postalCode);
  }
}
