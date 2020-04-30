import { Component, OnInit } from '@angular/core';

import { DevicesService } from 'src/app/shared/services/devices/devices.service';

@Component({
  selector: 'app-profile-hardware',
  templateUrl: './profile-hardware.page.html',
  styleUrls: ['./profile-hardware.page.scss'],
})
export class ProfileHardwarePage implements OnInit {

  // Icon
  iconHeader = 'assets/img/settings/hardware.svg'

  devices

  constructor(
    private deviceService: DevicesService
  ) { 
    this.loadInfo()
  }

  ngOnInit() {
  }

  loadInfo() {
    // this.devices = this.deviceService.devices
    console.log('Loading info')
  }

  connect() {
    
  }

  install() {

  }

  reinstall() {

  }



}
