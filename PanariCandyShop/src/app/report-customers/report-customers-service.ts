
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Environment } from "../app.environment";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportCustomersService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

    private requestMapping = 'report/';
    private url = Environment.apiUrl + this.requestMapping;

    public generateReport(){
        return this.http.get(this.url);
    }
    
};