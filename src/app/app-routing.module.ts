import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './comonents/first-page/first-page.component';
import { SignupComponent } from './comonents/signup/signup.component';
import { LoginComponent } from './comonents/login/login.component';
import { RecoverComponent } from './comonents/recover/recover.component';
import { ChangePasswordComponent } from './comonents/change-password/change-password.component';
import { HomeComponent } from './comonents/home/home.component';
import { AccountComponent } from './comonents/home/account/account.component';
import { ProfileComponent } from './comonents/home/profile/profile.component';
import { FriendsComponent } from './comonents/home/friends/friends.component';
import { NotificationComponent } from './comonents/home/notifications/notification/notification.component';
import { NotificationsComponent } from './comonents/home/notifications/notifications.component';
import { QuestionsComponent } from './comonents/home/account/questions/questions.component';
import { AllQuestionsComponent } from './comonents/home/all-questions/all-questions.component';
import { SettingComponent } from './comonents/home/setting/setting.component';
const routes: Routes = [
  {path:"" , component:FirstPageComponent},
  {path:"signUp" , component:SignupComponent},
  {path:"login" , component:LoginComponent},
  {path:"recover" , component:RecoverComponent},
  {path:"recover/:id" , component:ChangePasswordComponent},
  {path:"account" , component:HomeComponent , children:[
    {path:"wall" , component:AccountComponent} ,
    {path:"notifications" , component:NotificationsComponent},
    {path:"questions" , component:AllQuestionsComponent},
    {path:"setting/ptofile" , component:SettingComponent},
    {path:":name" , component:ProfileComponent} , 
    {path:"friends/search" , component:FriendsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
