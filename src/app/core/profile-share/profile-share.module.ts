import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSharePageRoutingModule } from './profile-share-routing.module';

import { ProfileSharePage } from './profile-share.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSharePageRoutingModule
  ],
  declarations: [ProfileSharePage]
})
export class ProfileSharePageModule {}
