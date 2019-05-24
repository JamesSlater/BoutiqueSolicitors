import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
error = this.error; 
  constructor(private authService: AuthenticationService, private router: Router) { }
 
  ngOnInit() {
  }
 
  logout() {
    this.router.navigate(['login']);
    // this.authService.logout();
  }

  search() {
    this.router.navigate(['members/menu/services']);
  }

  news() {
    this.router.navigate(['members/menu/news']);
  }

  bill() {
    this.router.navigate(['members/menu/bill']);
  }
  contact() {
    this.router.navigate(['members/menu/contact'])
  }

  about() {
    this.router.navigate(['members/menu/about'])
    
  }
}