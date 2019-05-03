import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
 user = this.user;
 pass = this.pass;
 error = this.error = "";
  constructor(private authService: AuthenticationService) { }
 
  ngOnInit() 
  {
  }
 
  login() {
    if ((this.user == "User") && (this.pass == "123")) {
    this.authService.login();
    this.error = "";
    }
    else
    this.error = "Incorrect credentials, please try again."
  }
 
}
