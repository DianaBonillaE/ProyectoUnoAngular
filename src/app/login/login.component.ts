import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {LoginService } from '../login/login-service';
import {Router} from '@angular/router';
import {Login} from '../Models/login';
import { Role } from '../Models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role : Role = new Role;
  login : Login = new Login();
  loginR : string;
  roles : Role[] = new Array<Role>();
  constructor(private router:Router, private service: LoginService){}

  ngOnInit() {
  }

  
  search(){
    this.service.search(this.login.email,this.login.password).subscribe(
      (data: Role[]) => {
        this.roles = data;
      }
    );
  }

}
