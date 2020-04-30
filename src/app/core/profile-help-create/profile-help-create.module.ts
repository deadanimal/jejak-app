import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHelpCreatePageRoutingModule } from './profile-help-create-routing.module';

import { ProfileHelpCreatePage } from './profile-help-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHelpCreatePageRoutingModule
  ],
  declarations: [ProfileHelpCreatePage]
})
export class ProfileHelpCreatePageModule {}
