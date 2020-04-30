import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BillsService } from 'src/app/shared/services/bills/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  // Bill
  histories
  paymentDue = 214.92
  dateDue = '05/05/2020'
  isListEmpty: boolean = true

  // Icon
  iconBill = 'assets/img/default/bill.svg'

  constructor(
    private billService: BillsService,
    private router: Router
  ) { 
    this.loadInfo()
    this.loadMockData()
  }

  ngOnInit() {
  }

  loadInfo() {
    // this.histories = this.billService.bills
    console.log('Loading info...')
    /* Uncomment this to use
    this.billService.get().subscribe(
      (res) => {
        // Success
        this.histories = res
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
    console.log('Loading mock data...')
  }

  navigatePage(url: string) {
    let navigationUrl: string = '/' + url
    this.router.navigate([navigationUrl])
    console.log(navigationUrl)
  }

}
