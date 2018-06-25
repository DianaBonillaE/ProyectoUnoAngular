import { Component, OnInit } from '@angular/core';
import { RegisterEmployeeService } from '../register-employee/register-employee.service';
import { User } from "../Models/user";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  user: User= new User();

  constructor(private router: Router, private service: RegisterEmployeeService) { }

  ngOnInit() {
  }

  insert(){
    this.service.insertEmployee(this.user.email,this.user.firstName, this.user.lastName,this.user.password,
      this.user.userRoleId,this.user.nameRole, this.user.country,this.user.province,this.user.canton,this.user.district,this.user.postalCode).subscribe(
      (data:User) =>{
        this.user = data;
      }
    )
  }

}
