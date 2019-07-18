import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { ServicedetailsPage } from '../servicedetails/servicedetails.page'

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public searchControl: FormControl;
  public items: any;
  public searching: any = false;
  public data;
  constructor(private dataService: DataService, private navCtrl: NavController, public router: Router, public modalController: ModalController) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe(debounceTime(400))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
  }

  onSearchInput(){
    this.searching = true;
}


  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm);
  }

  // viewDetails(item) {
  //   let dataString = JSON.stringify(item)

  //   // this.navCtrl.navigateForward('/members/details', item)
  //   this.router.navigate(['members/menu/servicedetails/' + dataString])
  //   // this.navCtrl.navigateBack('members/servicedetails',{data: item})
  // }

  async viewDetails(item) {
    const modal = await this.modalController.create({
      component: ServicedetailsPage,
      componentProps: { 
        title: item.title,
        description: item.description
      }
    });
    return await modal.present();
  }

}