import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplianceSettingsPage } from './appliance-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ApplianceSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplianceSettingsPageRoutingModule {}
