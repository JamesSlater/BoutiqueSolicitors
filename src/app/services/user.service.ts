import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
interface user {
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firedata = firebase.database().ref('/users');
  private user: user
  constructor() { }

setUser(user: user) {
  this.user = user;
}

getUID() {
  return this.user.uid
}

getallusers() {
  var promise = new Promise((resolve, reject) => {
    this.firedata.orderByChild('uid').once('value', (snapshot) => {
      let userdata = snapshot.val();
      let temparr = [];
      for (var key in userdata) {
        temparr.push(userdata[key]);
      }
      resolve(temparr);
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}

}