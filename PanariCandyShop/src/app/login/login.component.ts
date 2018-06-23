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

  login : Login = new Login();
  role :string;
  constructor(private router:Router, private service: LoginService){}

  ngOnInit() {
  }

  
  search(){
    this.service.search(this.login.email,this.login.password).subscribe(
     
    (data: string) => {
        this.role = data;
        console.log(JSON.stringify(data)+' hola')
        localStorage.setItem('sesion',this.login.email);
         if(data == 'Cliente'){
           localStorage.setItem('role',data);
           this.router.navigateByUrl('/search-home');
         }
         else{
           this.router.navigateByUrl('/search-cart');
         }
       },
       error =>{
         alert('Datos incorrectos');
       }
      );
    };
}


