import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute} from '@angular/router'
import {Cookie} from 'ng2-cookies'
import { ToastrService } from '../../../node_modules/ngx-toastr';
@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  public bookID:any;
  public bookData:any;
  public userId:any;
  constructor(public userService:UserService,public route:ActivatedRoute,public toastr:ToastrService) { }

  ngOnInit() {
    this.userId=Cookie.get('userId')
   this.bookID=this.route.snapshot.paramMap.get('id')
   this.userService.getSingleBook(this.bookID).subscribe((result:any)=>{
    this.bookData=result
    console.log(this.bookData)
   })
  }
  
  public add=(id,name)=>{
   this.userService.addtoFav(id,name,this.userId).subscribe((result:any)=>{
     if(result.status==302){
       this.toastr.warning(result.message)
     }
     else if(result.status==200){
       this.toastr.success(result.message)
     }
     else{
       this.toastr.error(result.message)
     }
     console.log(result)
   },(error)=>{
     this.toastr.error("Error Occured")
   })
  
  }
}
