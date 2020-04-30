import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemLayoutPage } from './system-layout.page';

const routes: Routes = [
  {
    path: '',
    component: SystemLayoutPage,
    children: [
      {
        path: 'appliances',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/appliances/appliances.module').then(m => m.AppliancesPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'bills',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/bills/bills.module').then(m => m.BillsPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/core/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/core/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemLayoutPageRoutingModule {}
