import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHelpTicketPage } from './profile-help-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHelpTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHelpTicketPageRoutingModule {}
