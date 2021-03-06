import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';


@Injectable()
export class InventoryService{

    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

    private requestMaping = "product/";
    private url = Environment.apiUrl + this.requestMaping;
   
    getAllProducts(){
        return this.http.get(this.url);
    }
    /*
    update(units:number, productId: number){
        return this.http.get(this.url+"inventory/"+units+"/"+productId)
    }
    */
}