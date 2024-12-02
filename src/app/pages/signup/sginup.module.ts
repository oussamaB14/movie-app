import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SginupPageRoutingModule } from './sginup-routing.module';

import { SginupPage } from './sginup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SginupPageRoutingModule
  ],
  declarations: [SginupPage]
})
export class SginupPageModule {}
