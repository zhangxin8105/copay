import { NgModule, ErrorHandler, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgLoggerModule, Level } from '@nsalaun/ng-logger';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Copay } from './app.component';

import { HomePage } from '../pages/home/home';
import { ReceivePage } from '../pages/receive/receive';
import { SendPage } from '../pages/send/send';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';

import { AboutPage } from '../pages/about/about';
import { TermsOfUsePage } from '../pages/terms-of-use/terms-of-use';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WalletProvider } from '../providers/wallet/wallet';
import { StorageProvider } from '../providers/storage/storage';
import { AppProvider } from '../providers/app/app';
import { PlatformProvider } from '../providers/platform/platform';

// Set different log level depending on environment.
const LOG_LEVEL = Level.LOG;
if (isDevMode()) {
  const LOG_LEVEL = Level.ERROR;
}

@NgModule({
  declarations: [
    Copay,
    HomePage,
    ReceivePage,
    SendPage,
    SettingPage,
    AboutPage,
    TermsOfUsePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgLoggerModule.forRoot(LOG_LEVEL),
    IonicModule.forRoot(Copay)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Copay,
    HomePage,
    ReceivePage,
    SendPage,
    SettingPage,
    AboutPage,
    TermsOfUsePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WalletProvider,
    StorageProvider,
    AppProvider,
    PlatformProvider
  ]
})
export class AppModule { }