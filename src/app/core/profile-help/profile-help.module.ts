import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHelpPageRoutingModule } from './profile-help-routing.module';

import { ProfileHelpPage } from './profile-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHelpPageRoutingModule
  ],
  declarations: [ProfileHelpPage]
})
export class ProfileHelpPageModule {}
