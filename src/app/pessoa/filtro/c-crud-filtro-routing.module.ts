
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCrudFiltroComponent } from './c-crud-filtro.component';
import { CCrudFiltroEntrarGuard } from './c-crud-filtro-entrar.guard';
import { CCrudFiltroSairGuard } from './c-crud-filtro-sair.guard';
import { CCrudFiltroResolver } from './c-crud-filtro.resolver';

const routes: Routes = [
  {
    path: '',
    component: CCrudFiltroComponent,
    canActivate: [CCrudFiltroEntrarGuard],
    canDeactivate: [CCrudFiltroSairGuard],
    resolve: [ CCrudFiltroResolver ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCrudFiltroRoutingModule { }
