import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SgininPage } from './sginin.page';

const routes: Routes = [
  {
    path: '',
    component: SgininPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SgininPageRoutingModule {}
