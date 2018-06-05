import { Component, OnInit } from '@angular/core';
import { ReportCustomers } from "../Models/report-customers";
import {Router} from '@angular/router';
import { ReportCustomersService } from "./report-customers-service";
@Component({
  selector: 'app-report-customers',
  templateUrl: './report-customers.component.html',
  styleUrls: ['./report-customers.component.css']
})
export class ReportCustomersComponent implements OnInit {
  reports : ReportCustomers[] = new Array<ReportCustomers>();
  constructor(private router:Router, private service: ReportCustomersService) { }

  ngOnInit() {
    this.service.generateReport().subscribe((data: ReportCustomers[]) => {
      this.reports = data;
    });
  }
}
