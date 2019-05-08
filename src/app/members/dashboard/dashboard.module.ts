import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  { path: '',
    component: DashboardPage,
    children: []
  },
      
  {
      path: 'about',
      loadChildren: '../about/about.module#AboutPageModule' 
  },
      
  {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
  },
  {
        path: 'dashboard',
        redirectTo: ''
  }
      

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
