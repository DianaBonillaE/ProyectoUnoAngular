import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';

@Injectable()
export class ReportProductsService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

    private requestMaping = "product/report/";
    private url = Environment.apiUrl + this.requestMaping;

    public filterProductByCategory(categoryId: number){
        return this.http.get(this.url + categoryId);
    }
}