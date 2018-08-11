import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class UserService {

  public baseurl="http://localhost:1100/api/v1.0";
  public api ="https://www.googleapis.com/books/v1/volumes?q="

  constructor(public http:HttpClient) {}

  public loginFunction=(loginData)=>{
    const params=new HttpParams()
    .set('email',loginData.email)
    .set('password',loginData.password)
     return this.http.post(`${this.baseurl}/login`,params)
  }
  
  public signupFunction=(signupData)=>{
    const params=new HttpParams()
    .set('email',signupData.email)
    .set('password',signupData.password)
    .set('phone',signupData.phone)
    .set('firstName',signupData.firstName)
    .set('lastName',signupData.lastName)
    return this.http.post(`${this.baseurl}/signup`,params)
  }
  public getSingleBook=(id)=>{
    console.log(id)
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
  }

  public searchAllBooks=(bookName)=>{
    return this.http.get(`${this.api}${bookName}`)
  }
 public addtoFav=(id,name,userId)=>{
   let data={
     bookId:id,
     bookName:name,
     userId:userId
   }
   console.log("Request Made");
   return this.http.post(`${this.baseurl}/adding`,data)
 }
 public allfavs=(id)=>{
   console.log("Id",id)
return this.http.get(`${this.baseurl}/all/${id}`)
 }
 public removefavs=(id)=>{
   console.log("Service")
   return this.http.delete(`${this.baseurl}/remove/${id}`)
 }
}
