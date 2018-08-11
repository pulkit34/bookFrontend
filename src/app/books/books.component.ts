import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import {Cookie} from 'ng2-cookies';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  public book: string
  public searchResult: any;
  public name;
  public userID;
  constructor(public http: HttpClient, public toastr: ToastrService, public userService: UserService
  ,public router:Router) { }

  ngOnInit() { 
    this.name=Cookie.get('userName')
    this.userID=Cookie.get('userId')
  }
  public search = () => {
    this.userService.searchAllBooks(this.book).subscribe((result: any) => {
      this.searchResult = result.items
      console.log(this.searchResult)
    })
  }
  public logout=()=>{
    Cookie.delete('userId');
    Cookie.delete('userName');
    this.userID='';
    this.name='';
    setTimeout(()=>{
      this.router.navigate(['/login'])
      this.toastr.success("Logout Successfull")
    },1000)
    
  }
}
