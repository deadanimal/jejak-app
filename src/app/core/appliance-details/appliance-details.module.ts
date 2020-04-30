import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplianceDetailsPageRoutingModule } from './appliance-details-routing.module';

import { ApplianceDetailsPage } from './appliance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplianceDetailsPageRoutingModule
  ],
  declarations: [ApplianceDetailsPage]
})
export class ApplianceDetailsPageModule {}
