import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public searchControl: FormControl;
  public items: any;
  public searching: any = false;

  constructor(private dataService: DataService) {
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
}
