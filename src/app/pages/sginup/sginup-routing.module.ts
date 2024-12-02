import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SginupPage } from './sginup.page';

const routes: Routes = [
  {
    path: '',
    component: SginupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SginupPageRoutingModule {}
