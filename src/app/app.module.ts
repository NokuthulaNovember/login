import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { EditPage } from '../pages/edit/edit'

import { Codetribe } from './service/service';
import { TribePage } from '../pages/tribe/tribe';
import { ListPage } from '../pages/list/list';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    EditPage,
    TribePage,
    ListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    EditPage,
    TribePage,
    ListPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Codetribe,
    TribePage,
    ListPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
    
  ]
})
export class AppModule {}
