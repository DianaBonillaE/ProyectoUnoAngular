import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private router: Router, private service: InvoiceService) { }

  ngOnInit() {
  }

}
