import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/user.model';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public user : User;

  constructor(private loginService: LoginService, private router: Router) {
      this.user = new User();
  }

  validateLogin() {
    if(this.user.username && this.user.password) {
        this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        //console.log(result['_body'][11])
        //var body = result['_body']
        //console.log(body[11])//body es un string

        if(result['status'] === 'success') {
        //if(body[11] === 's') {
          this.router.navigate(['/home']);
        } else {
          alert('Wrong username password');
        }

      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }

  ngOnInit() {
  }

}
