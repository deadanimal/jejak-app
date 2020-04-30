import { Component } from '@angular/core';
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


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public locationLa;
  public motionLa;

  lol: any;
  lola: any;

  constructor() {
    this.configureBackgroundGeolocation();
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
