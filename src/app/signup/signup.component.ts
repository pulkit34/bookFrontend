import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserService} from './../user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email:string;
  public password:string;
  public phone:string;
  public firstName:string;
  public lastName:string;
  constructor(public toastr:ToastrService,public userService:UserService,public route:Router){}
  
  ngOnInit(){}
  
  public gotoSignIn=()=>{
    this.route.navigate(['/login'])
  }
  public signUp=()=>{
    if(!this.email){
      this.toastr.warning("Email Is Required")
    }
    else if(!this.password){
      this.toastr.warning("Password Is Required")
    }
    else if(!this.firstName){
      this.toastr.warning("Enter Your First Name")
    }
    else if(!this.lastName){
      this.toastr.warning("Enter Your Last Name")
    }
    else if(!this.phone){
      this.toastr.warning("Phone Number Is Missing")
    }
    else{
      let data={
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        phone:this.phone
      }
      this.userService.signupFunction(data).subscribe((result)=>{
        console.log(result)
        this.toastr.success("Sign Up Successfull")
        setTimeout(()=>{
          this.gotoSignIn()
        },1000)
      })
    }
    
  }
}
