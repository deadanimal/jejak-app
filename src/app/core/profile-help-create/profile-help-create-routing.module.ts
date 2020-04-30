import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHelpCreatePage } from './profile-help-create.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHelpCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHelpCreatePageRoutingModule {}
