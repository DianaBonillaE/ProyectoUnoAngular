import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { HomeService} from './home-service';
import {Router} from '@angular/router';
import {Login} from '../Models/login';
import { Role } from '../Models/role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private service: HomeService){}

  ngOnInit() {
  }



}
