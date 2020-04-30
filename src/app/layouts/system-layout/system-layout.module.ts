import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemLayoutPageRoutingModule } from './system-layout-routing.module';

import { SystemLayoutPage } from './system-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemLayoutPageRoutingModule
  ],
  declarations: [SystemLayoutPage]
})
export class SystemLayoutPageModule {}
