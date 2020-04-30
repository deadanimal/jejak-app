import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import BackgroundGeolocation, {
  State,
  Config,
  Location,
  LocationError,
  Geofence,
  HttpEvent,
  MotionActivityEvent,
  ProviderChangeEvent,
  MotionChangeEvent,
  GeofenceEvent,
  GeofencesChangeEvent,
  HeartbeatEvent,
  ConnectivityChangeEvent
} from "cordova-background-geolocation-lt";
import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { User } from 'src/app/shared/services/users/users.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Icons
  iconAvatar = 'assets/img/default/avatar.png'
  iconHeader = 'assets/img/settings/portfolio.svg'

  // Data
  user: User

  public locationLa;
  public motionLa;

  lol: any;
  lola: any;

  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private userService: UsersService,
    private router: Router
  ) { 
    this.loadInfo()
  }

  ngOnInit() {
    this.configureBackgroundGeolocation();
  }

  loadInfo() {
    console.log('Loading info...')
    // this.user = this.userService.user
    /* Uncomment this to use
    this.userService.get().subscribe(
      (res) => {
        // Success
        this.user = res
      },
      () => {
        // Failed
      },
      () => {
        // After
      }
    )
    */
  }

  navigatePage(url: string) {
    let navigationUrl: string = '/' + url
    this.router.navigate([navigationUrl])
    console.log(navigationUrl)
  }

  logout() {
    this.jwtService.destroyToken()
    this.router.navigate(['/login'], {
      replaceUrl: true
    })
  }

  // Like any Cordova plugin, you must wait for Platform.ready() before referencing the plugin.
  configureBackgroundGeolocation() {
    // 1.  Listen to events.
    BackgroundGeolocation.onLocation(location => {
      console.log('[location] - ', location);
      this.locationLa = location;
      this.lol = location.coords;
    });

    BackgroundGeolocation.onMotionChange(event => {
      console.log('[motionchange] - ', event.isMoving, event.location);
      this.motionLa = JSON.stringify(event);
      let coords = event.location.coords;
      this.lol = coords;
    });

    BackgroundGeolocation.onHttp(response => {
      console.log('[http] - ', response.success, response.status, response.responseText);
    });

    BackgroundGeolocation.onProviderChange(event => {
      console.log('[providerchange] - ', event.enabled, event.status, event.gps);
    });

    let url: string = environment.baseUrl + 'v1/positions/feed/';

    // 2.  Configure the plugin with #ready
    BackgroundGeolocation.ready({
      reset: true,
      debug: true,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      url: url,
      autoSync: true,
      stopOnTerminate: false,
      startOnBoot: true
    }, (state) => {
      console.log('[ready] BackgroundGeolocation is ready to use');
      if (!state.enabled) {
        // 3.  Start tracking.
        BackgroundGeolocation.start();
      }
    });
  }    

}
