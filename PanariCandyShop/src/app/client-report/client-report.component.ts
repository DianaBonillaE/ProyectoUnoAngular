import { Component, OnInit } from '@angular/core';
import { ClientReport } from '../Models/client-report';
import { ClientReportService } from './client-report-service';

@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.css']
})
export class ClientReportComponent implements OnInit {

  private reports: ClientReport[] = new Array<ClientReport>();

  constructor(private clientReportService: ClientReportService) {
    
   }

  ngOnInit() {
  }

}
