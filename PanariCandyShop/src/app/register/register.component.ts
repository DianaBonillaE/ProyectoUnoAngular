import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register-service';
import { User } from "../Models/user";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User= new User();

  constructor(private router: Router, private service: RegisterService) { }

  ngOnInit() {
  }

  insert(){
    this.service.insertUser(this.user.email,this.user.firstName, this.user.lastName,this.user.password,
      this.user.userRoleId,this.user.nameRole, this.user.country,this.user.province,this.user.canton,this.user.district,this.user.postalCode).subscribe(
      (data:User) =>{
        this.user = data;
      }
    )
  }

}
