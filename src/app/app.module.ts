import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Router} from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { UserService } from './user.service';
import {FormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { SingleBookComponent } from './single-book/single-book.component';
import { FavoritesComponent } from './favorites/favorites.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    SingleBookComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'',redirectTo:'login',pathMatch:'full'},
   {path:'books',component:BooksComponent},
   {path:'single-book/:id',component:SingleBookComponent},
   {path:'favorites',component:FavoritesComponent}
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
