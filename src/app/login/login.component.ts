import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {UserService} from './../user.service'
import { Router } from '../../../node_modules/@angular/router';
import {Cookie} from 'ng2-cookies'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string
  public password: string
  constructor(public toastr: ToastrService,public userService:UserService,public router:Router) { }

  ngOnInit() { }

  public login = () => {
    if (!this.email) {
      this.toastr.warning("Email Parameter is Missing")
    }
    else if (!this.password) {
      this.toastr.warning("Password Parameter is Missing")
    }
    else {
      let data = {
        email: this.email,
        password: this.password
      }
    this.userService.loginFunction(data).subscribe((result:any)=>{
      console.log(result)
      if(result.status==200){
      this.toastr.success(result.message)
      setTimeout(()=>{
        Cookie.set('userName',result.data.firstName + " " + result.data.lastName)
        Cookie.set('userId',result.data.userId)
        this.router.navigate(['/books'])
      },1000)
    }
    else{
      this.toastr.error(result.message)
    }
    },(err)=>{
      this.toastr.error("ERROR Occured")
    })
    }
  }
}
