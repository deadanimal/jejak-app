import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHelpTicketPageRoutingModule } from './profile-help-ticket-routing.module';

import { ProfileHelpTicketPage } from './profile-help-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHelpTicketPageRoutingModule
  ],
  declarations: [ProfileHelpTicketPage]
})
export class ProfileHelpTicketPageModule {}
