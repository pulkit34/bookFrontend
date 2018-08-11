import { Component, OnInit } from '@angular/core';
import {Cookie} from 'ng2-cookies'
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { UserService } from '../user.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
public name:any;
public userID:any;
public result:any;
public allBooks=[];
  constructor(public toastr:ToastrService,public userService:UserService) { }

  ngOnInit() {
    this.name=Cookie.get("userName")
    this.userID=Cookie.get("userId")
    this.getAllfavs()
  
  }
  public getAllfavs=()=>{
  this.userService.allfavs(this.userID).subscribe((result:any)=>{
    
    if(result.status==200){
    this.toastr.info(result.message)
    for(var x of result.data){
     this.userService.getSingleBook(x.bookId).subscribe((result)=>{
       this.allBooks.push(result)

     })
    }
    }
    else{
    this.toastr.warning(result.message)
    }
    
  },(error)=>{
    this.toastr.error("Error Occured")
  })
}
public remove=(id)=>{
  this.userService.removefavs(id).subscribe((apiResponse:any)=>{
    this.toastr.warning(apiResponse.message)
    this.allBooks=[]
    this.getAllfavs()
  })
}

}



