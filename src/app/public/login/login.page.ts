import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular'; 
import { directiveDef } from '@angular/core/src/view';
import { FirebaseAuth } from '@angular/fire';

let _this
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "a@guest.com";
  pass: string = "testing";
  // email: string = "adam.brookner@theaccesspoint.co.uk"
  // pass: string = "4206969"
  error = this.error = "";
  constructor(public afAuth: AngularFireAuth, private router: Router, private navCtrl: NavController) { 
    _this = this;
  }
 
  ngOnInit() 
  {

  }

 
  async login() {

    const { email, pass } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
          
       console.log(res)
       this.error = ""
       this.afAuth.auth.onAuthStateChanged(function(user){

        if (user.displayName){
      _this.navCtrl.navigateForward('/members/menu/dashboard'); 

        }
        else {
      _this.navCtrl.navigateForward('/members/welcome');
        }
      }); 
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
 

