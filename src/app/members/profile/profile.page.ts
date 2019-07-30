import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular'; 
import { AngularFireStorage } from '@angular/fire/storage'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
firstName = this.firstName;

@ViewChild('fileButton') fileButton: {
  nativeElement: HTMLInputElement;
}

  constructor(public afAuth: AngularFireAuth, private navCtrl: NavController, private afStorage: AngularFireStorage) { }
  


  ngOnInit() {
  }

  // ProfilePic() {
  //   var uploader = document.getElementById('upload')
  //   var fileButton = document.getElementById('fileButton');
  //   fileButton.addEventListener('change', function(e) {
  //   var file = 'e.target.files[0];'
  //   var user = this.afAuth.auth.currentUser;
  //   var storageRef = this.afStorage.ref(user + '/profilePicture/' + file) 
  //   var task = storageRef.put(file);
  //   })          
                                                                                                                                         
  //   }

  checkForEmoticons() {
    //^[a-z0-9]+$/i
  }

  UpdateProfile() {
    // this.afAuth.auth.currentUser.displayName = this.firstName;
    this.afAuth.auth.currentUser.updateProfile({displayName: this.firstName})
    this.navCtrl.navigateForward('members/menu/dashboard')
  }

}
