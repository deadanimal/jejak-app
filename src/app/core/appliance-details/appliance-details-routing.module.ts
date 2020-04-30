import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplianceDetailsPage } from './appliance-details.page';

const routes: Routes = [
  {
    path: '',
    component: ApplianceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplianceDetailsPageRoutingModule {}
