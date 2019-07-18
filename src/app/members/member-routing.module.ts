import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
 
const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' }  ,   
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'chatroom', loadChildren: './chatroom/chatroom.module#ChatroomPageModule' },

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }