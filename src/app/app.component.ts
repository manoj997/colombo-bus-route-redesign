import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Search Route Number',
      url: '/home',
      icon: 'search'
    },
    {
      title: 'Route Number Details',
      url: '/route-number',
      icon: 'information-circle'
    },
    {
      title:'Current Place to Destination',
      url:'/cptodest',
      icon:'pin'
    },
    {
      title:'Buses in Current Place',
      url:'/busincp',
      icon:'bus'
    }
    // ,
    // {
    //   title:'Search Route Result',
    //   url:'/srr-host',
    //   icon:'list-box'
    // }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
