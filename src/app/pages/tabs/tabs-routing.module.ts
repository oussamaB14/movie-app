import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../movies/movies.module').then((m) => m.MoviesPageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../watchlist/tab2.module').then((m) => m.WatchlistPageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../profile/tab3.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
