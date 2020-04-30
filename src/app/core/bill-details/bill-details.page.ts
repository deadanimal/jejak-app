import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BillsService } from 'src/app/shared/services/bills/bills.service';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.page.html',
  styleUrls: ['./bill-details.page.scss'],
})
export class BillDetailsPage implements OnInit {

  // Data
  bill

  constructor(
    private billService: BillsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loadInfo() {
    // this.bill = this.billService.bill
    console.log('Loading info...')
  }

  loadMockData() {
    console.log('Loading mock data...')
  }

  view() {
    console.log('Viewing bill...')
  }

  navigatePage(url: string) {
    let navigationUrl: string = '/' + url
    this.router.navigate([navigationUrl])
    console.log(navigationUrl)
  }

}
