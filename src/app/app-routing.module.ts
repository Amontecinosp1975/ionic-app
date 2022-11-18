import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs/principal',
    redirectTo: 'tabs/principal',
    pathMatch: 'full'
  },
  {
    path: 'tabs/scan-qr',
    redirectTo: 'tabs/scan-qr',
    pathMatch: 'full'
  },
  {
    path: 'tabs/companeros',
    redirectTo: 'tabs/companeros',
    pathMatch: 'full'
  },
  {
    path: 'tabs/cuenta',
    redirectTo: 'tabs/cuenta',
    pathMatch: 'full'
  },
  {
    path: 'profile/:id',
    redirectTo: 'profile/:id',
    pathMatch: 'full'
  },
  {
    path: 'e404',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/perfil-companero/perfil-companero.module').then( m => m.PerfilCompaneroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
