import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
 
const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'bill', loadChildren: './bill/bill.module#BillPageModule' },
  { path: 'team', loadChildren: './team/team.module#TeamPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }  ,

  
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }