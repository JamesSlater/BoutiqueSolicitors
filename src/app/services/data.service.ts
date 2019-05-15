import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = []

  constructor() { 
    this.items = [
      { title: "Asylum and Human Rights" },
      { title: "Challenging Decisions" },
      { title: "Human Rights and Long Residence" },
      { title: "Children of British or Settled Parents" },
      { title: "Marriage, Partner and Fiancé Visas" },
      { title: "Tier 1 – Graduate Entrepreneur Visa" },
      { title: "Investor (Tier 1)" },
      { title: "Sponsor License" },
      { title: "Entrepreneurs Visa – establishing a business in the UK" },
      { title: "Representative of an Overseas Business Visa" },
    ];
  }
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
