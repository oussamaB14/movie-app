import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SgininPageRoutingModule } from './sginin-routing.module';

import { SgininPage } from './sginin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SgininPageRoutingModule
  ],
  declarations: [SgininPage]
})
export class SgininPageModule {}
