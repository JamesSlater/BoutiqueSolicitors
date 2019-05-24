import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular'; 
import { directiveDef } from '@angular/core/src/view';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "a@guest.com";
  pass: string = "testing";
  error = this.error = "";
  constructor(public afAuth: AngularFireAuth, private router: Router, private navCtrl: NavController) { }
 
  ngOnInit() 
  {

  }
 
  async login() {

    const { email, pass } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      this.navCtrl.navigateForward('/members/menu/dashboard');     
       console.log(res)
       this.error = ""
    } catch(err) {
      console.dir(err)
      if (err.code == "auth/invalid-email"){
        this.error = "Invalid email address"
      }
      else if (err.code == "auth/wrong-password"){
        this.error = "Invalid password"
      }
      else if (err.code == "auth/user-not-found"){
        this.error = "This email is not registered with us"
      }
 
      }
      

    }
   



  }
 

