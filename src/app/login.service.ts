import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/http';
import { Http, Response } from '@angular/http';
import { User } from './models/user.model';
import 'rxjs/Rx';



@Injectable()
export class LoginService {

  //constructor(private http: HttpClient) {
  constructor(private http: Http) {


   }

   validateLogin(user: User){
     //observable
     return this.http.post('/api/user/login',{
         username : user.username,
         password : user.password
     })
     .map((response: Response)=> response.json())
 }

}
