import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './comonents/first-page/first-page.component';
import { FooterComponent } from './comonents/footer/footer.component';
import { SignupComponent } from './comonents/signup/signup.component';
import { HeaderComponent } from './comonents/header/header.component';
import { LoginComponent } from './comonents/login/login.component';
import { RecoverComponent } from './comonents/recover/recover.component';
import { ChangePasswordComponent } from './comonents/change-password/change-password.component';
import { HomeNavComponent } from './comonents/home/home-nav/home-nav.component';
import { HomeComponent } from './comonents/home/home.component';
import { AccountComponent } from './comonents/home/account/account.component';
import { QuestionComponent } from './comonents/home/account/question/question.component';
import { QuestionNavComponent } from './comonents/home/account/question-nav/question-nav.component';
import { QuestionsComponent } from './comonents/home/account/questions/questions.component';
import { SideFooterComponent } from './comonents/home/account/side/side-footer/side-footer.component';
import { SideComponent } from './comonents/home/account/side/side.component';
import { PerfileComponent } from './comonents/home/profile/perfile/perfile.component';
import { ProfileComponent } from './comonents/home/profile/profile.component';
import { MyQuestionComponent } from './comonents/home/profile/my-question/my-question.component';
import { MyNavComponent } from './comonents/home/profile/my-nav/my-nav.component';
import { MyQuestionsComponent } from './comonents/home/profile/my-questions/my-questions.component';
import { MySideBarComponent } from './comonents/home/profile/my-side-bar/my-side-bar.component';
import { FriendsComponent } from './comonents/home/friends/friends.component';
import { SearchComponent } from './comonents/home/friends/search/search.component';
import { NotificationsComponent } from './comonents/home/notifications/notifications.component';
import { NotificationComponent } from './comonents/home/notifications/notification/notification.component';
import { NotificationNavComponent } from './comonents/home/notifications/notification-nav/notification-nav.component';
import { AllQuestionsComponent } from './comonents/home/all-questions/all-questions.component';
import { AllQueComponent } from './comonents/home/all-questions/all-que/all-que.component';
import { SettingComponent } from './comonents/home/setting/setting.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    FooterComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    RecoverComponent,
    ChangePasswordComponent,
    HomeNavComponent,
    HomeComponent,
    AccountComponent,
    QuestionComponent,
    QuestionNavComponent,
    QuestionsComponent,
    SideFooterComponent,
    SideComponent,
    PerfileComponent,
    ProfileComponent,
    MyQuestionComponent,
    MyNavComponent,
    MyQuestionsComponent,
    MySideBarComponent,
    FriendsComponent,
    SearchComponent,
    NotificationsComponent,
    NotificationComponent,
    NotificationNavComponent,
    AllQuestionsComponent,
    AllQueComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
