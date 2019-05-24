import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
 
const routes: Routes = [
   { path: '', loadChildren: './menu/menu.module#MenuPageModule' }  ,  
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }