import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import {Router} from '@angular/router';
import { OrderDetail } from '../Models/orderDetail';
import { User } from '../Models/user';
import { Invoice } from '../Models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  //invoices : Invoice[] = new Array<Invoice>();
user: User[] = new Array<User>();
orderDetails: OrderDetail[] = new Array<OrderDetail>();
  constructor(private router: Router, private service: InvoiceService) { }

  ngOnInit() {
   var param= JSON.parse(localStorage.getItem('invoice'));
    this.orderDetails=param;
    console.log(param[0].orderDetail);
      }
  }
