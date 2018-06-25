import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Environment} from '../app.environment';
import { ClientReport } from '../Models/client-report';


@Injectable()
export class ClientReportService{

    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {}

    private requestMaping = "report/";
    private url = Environment.apiUrl + this.requestMaping;

    public seacrhClients(startDate: string, endDate:string){
        return this.http.get(this.url +startDate+"/"+endDate);
    }

    public getAllReports(){
        return this.http.get(this.url);        
    }
}