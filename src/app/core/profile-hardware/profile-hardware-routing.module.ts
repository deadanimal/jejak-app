import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHardwarePage } from './profile-hardware.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHardwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHardwarePageRoutingModule {}
