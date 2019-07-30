import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
text: string;
chatRef: any;
uid: string;
time: any;
  constructor(public afAuth: AngularFireAuth, public afStore: AngularFirestore) { 
    this.uid = localStorage.getItem('userid')
    this.chatRef = this.afStore.collection('chats', ref=>ref.orderBy('Timestamp')).valueChanges();
  }

  send() {
    if (this.text != '') {
      this.afStore.collection('chats').add({
        Name: this.afAuth.auth.currentUser.displayName,
        Message: this.text,
        UserID: this.afAuth.auth.currentUser.uid,
        Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.text = '';
    }
  }



  ngOnInit() {
  }

}
