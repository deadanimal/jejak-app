import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillPaymentPageRoutingModule } from './bill-payment-routing.module';

import { BillPaymentPage } from './bill-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillPaymentPageRoutingModule
  ],
  declarations: [BillPaymentPage]
})
export class BillPaymentPageModule {}
