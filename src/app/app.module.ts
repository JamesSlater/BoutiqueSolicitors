import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, AlertController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { ServicedetailsPageModule } from '../app/members/servicedetails/servicedetails.module'
import { Alert } from 'selenium-webdriver';
import { LoginPageModule } from './public/login/login.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    LoginPageModule,
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'Boutique-Solicitors'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ServicedetailsPageModule ],
  providers: [
    ModalController,
    AlertController,
    CallNumber,
    StatusBar,
   
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
