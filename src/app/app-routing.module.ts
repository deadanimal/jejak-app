import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./layouts/system-layout/system-layout.module').then( m => m.SystemLayoutPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'auth-layout',
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then( m => m.AuthLayoutPageModule)
  },
  {
    path: 'system-layout',
    loadChildren: () => import('./layouts/system-layout/system-layout.module').then( m => m.SystemLayoutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'appliance-details',
    loadChildren: () => import('./core/appliance-details/appliance-details.module').then( m => m.ApplianceDetailsPageModule)
  },
  {
    path: 'profile-hardware',
    loadChildren: () => import('./core/profile-hardware/profile-hardware.module').then( m => m.ProfileHardwarePageModule)
  },
  {
    path: 'profile-information',
    loadChildren: () => import('./core/profile-information/profile-information.module').then( m => m.ProfileInformationPageModule)
  },
  {
    path: 'appliance-settings',
    loadChildren: () => import('./core/appliance-settings/appliance-settings.module').then( m => m.ApplianceSettingsPageModule)
  },
  {
    path: 'profile-about',
    loadChildren: () => import('./core/profile-about/profile-about.module').then( m => m.ProfileAboutPageModule)
  },
  {
    path: 'profile-help',
    loadChildren: () => import('./core/profile-help/profile-help.module').then( m => m.ProfileHelpPageModule)
  },
  {
    path: 'profile-share',
    loadChildren: () => import('./core/profile-share/profile-share.module').then( m => m.ProfileSharePageModule)
  },
  {
    path: 'bill-details',
    loadChildren: () => import('./core/bill-details/bill-details.module').then( m => m.BillDetailsPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./core/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'bill-payment',
    loadChildren: () => import('./core/bill-payment/bill-payment.module').then( m => m.BillPaymentPageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'profile-help-create',
    loadChildren: () => import('./core/profile-help-create/profile-help-create.module').then( m => m.ProfileHelpCreatePageModule)
  },
  {
    path: 'profile-help-ticket',
    loadChildren: () => import('./core/profile-help-ticket/profile-help-ticket.module').then( m => m.ProfileHelpTicketPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
