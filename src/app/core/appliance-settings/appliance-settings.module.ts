import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplianceSettingsPageRoutingModule } from './appliance-settings-routing.module';

import { ApplianceSettingsPage } from './appliance-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplianceSettingsPageRoutingModule
  ],
  declarations: [ApplianceSettingsPage]
})
export class ApplianceSettingsPageModule {}
