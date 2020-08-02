
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroComponent } from './filtro.component';
import { FiltroEntrarGuard } from './filtro-entrar.guard';
import { FiltroSairGuard } from './filtro-sair.guard';
import { FiltroResolver } from './filtro.resolver';

const routes: Routes = [
  {
    path: '',
    component: FiltroComponent,
    canActivate: [FiltroEntrarGuard],
    canDeactivate: [FiltroSairGuard],
    resolve: [ FiltroResolver ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltroRoutingModule { }
