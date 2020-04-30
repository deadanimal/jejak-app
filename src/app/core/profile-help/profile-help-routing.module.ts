import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHelpPage } from './profile-help.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHelpPageRoutingModule {}
