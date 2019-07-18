import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
firstName
// firstName = this.firstName
  constructor(public afAuth: AngularFireAuth, private navCtrl: NavController) { }
  

  ngOnInit() {
  }

  

  UpdateProfile() {
    // this.afAuth.auth.currentUser.displayName = this.firstName;
    this.afAuth.auth.currentUser.updateProfile({displayName: this.firstName})
    this.navCtrl.navigateForward('members/menu/dashboard')
  }

}
