import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistPage } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: WatchlistPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistPageRoutingModule {}
