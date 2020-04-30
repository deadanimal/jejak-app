import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.page.html',
  styleUrls: ['./bill-payment.page.scss'],
})
export class BillPaymentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pay() {
    console.log('Making a payment...')
  }

}
