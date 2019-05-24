import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private router: Router, private callNumber: CallNumber, private alertController: AlertController) { }

  ngOnInit() {
  }

  about() {
    this.router.navigate(['members/menu/about'])
  }

  dashboard() {
    this.router.navigate(['members/menu/dashboard'])
  }

  async callAlert() {
    console.log('method executed')
    const callAlert = await this.alertController.create({
      message: "Are you sure you want to call Boutique Solicitors?",
      buttons: [{
        text: "Cancel",
        role: "cancel"

      },
      {
        text: "Call",
        handler: () => {this.callBS()}
      }
    ]
    });
    callAlert.present()

  }

  async callBS() {
    
    this.callNumber.callNumber("07847948252", false)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err))
  }

}
