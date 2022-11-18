import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('../../pages/principal/principal.module').then( m => m.PrincipalPageModule)
      },
      {
        path: 'scan-qr',
        loadChildren: () => import('../../pages/scan-qr/scan-qr.module').then( m => m.ScanQrPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('../../pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
      },
      {
        path: 'companeros',
        loadChildren: () => import('../../pages/companeros/companeros.module').then( m => m.CompanerosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
