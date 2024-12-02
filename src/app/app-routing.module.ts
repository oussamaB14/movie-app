import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sginup',
    loadChildren: () => import('./pages/sginup/sginup.module').then( m => m.SginupPageModule)
  },
  {
    path: 'sginin',
    loadChildren: () => import('./pages/sginin/sginin.module').then( m => m.SgininPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
