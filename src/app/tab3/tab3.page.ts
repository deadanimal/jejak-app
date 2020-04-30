import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  a = 'ko'

  constructor(public device: Device) {}

  ngOnInit() {
    if(this.device.isVirtual) {
      this.a = 'virtual'
    } else {
      this.a = 'ok'
    }
  }

}
