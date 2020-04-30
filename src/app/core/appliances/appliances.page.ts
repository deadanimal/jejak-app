import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Appliance } from '../../../assets/mock/appliances';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss'],
})
export class AppliancesPage implements OnInit {

  // Appliances
  appliances
  isListEmpty: boolean = true

  // Icon
  iconError = 'assets/img/default/404-error.svg'
  iconAirCond = 'assets/img/appliance/air-conditioner.svg'
  iconDishwasher = 'assets/img/appliance/dishwasher.svg'
  iconFridge = 'assets/img/appliance/fridge.svg'
  iconLamp = 'assets/img/appliance/lamp.svg'
  iconLamp1 = 'assets/img/appliance/lamp-1.svg'
  iconLCD = 'assets/img/appliance/lcd.svg'
  iconMicrowave = 'assets/img/appliance/microwave.svg'
  iconToaster = 'assets/img/appliance/toaster.svg'
  iconDryer = 'assets/img/appliance/tumble-dryer.svg'

  constructor(
    private applianceService: AppliancesService,
    private router: Router
  ) { 
    this.loadInfo()
    this.loadMockData()
  }

  ngOnInit() {
  }

  loadInfo() {
    // this.appliances = this.applianceService.appliances
    console.log('Loading info...')
    /* Uncomment this to use
    this.applianceService.get().subscribe(
      (res) => {
        // Success
        this.appliances = res
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

  loadMockData() { // Remove this to remove mock data
    setTimeout(
      () => {
        this.appliances = Appliance
        this.isListEmpty = !this.isListEmpty
        console.log('Mock data loaded')
      }, 500
    )
  }

  viewDetails() {
    // 
    this.router.navigate(['/appliance-details'])
  }
}
