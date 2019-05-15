import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: ' ‏‏‎ ' + 'Dashboard',
      url: 'dashboard.module',
      icon: 'home'
    },
    {
      title: ' ‏‏‎ ' + 'About',
      url: 'about',
      icon: 'information-circle-outline'
    },
    {
      title: ' ‏‏‎ ' + 'Contact',
      url: 'contact',
      icon: 'book'
    },
    {
      title: ' ‏‏‎ ' + 'News',
      url: 'news',
      icon: 'briefcase'
    },
    {
      title: ' ‏‏‎ ' + 'Services',
      url: 'services',
      icon: 'filing'
    },
    {
      title: ' ‏‏‎ ' + 'Team',
      url: 'team',
      icon: 'construct'
    }


  ];

  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
   }

  ngOnInit() {
  }

}
