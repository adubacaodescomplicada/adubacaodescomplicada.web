import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCrudComponent } from './c-crud.component';
import { CCrudFormResolver } from './c-crud.resolver';
import { CCrudEntrarGuard } from './c-crud-entrar.guard';
import { CCrudSairGuard } from './c-crud-sair.guard';
import { CCrudFormInserirResolver } from './form/c-crud-form-inserir.resolver';
import { CCrudFormExcluirResolver } from './form/c-crud-form-excluir.resolver';
import { CCrudFormEditarResolver } from './form/c-crud-form-editar.resolver';
import { CCrudFormVisualizarResolver } from './form/c-crud-form-visualizar.resolver';

const routes: Routes = [
  {
    path: '',
    component: CCrudComponent,
    resolve: [CCrudFormResolver],
    canActivate: [CCrudEntrarGuard],
    canDeactivate: [CCrudSairGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./list/c-crud-list.module').then(m => m.CCrudListModule),
      },
      {
        path: 'filtrar',
        loadChildren: () => import('./filtro/c-crud-filtro.module').then(m => m.CCrudFiltroModule),
      },
      {
        path: 'inserir',
        loadChildren: () => import('./form/c-crud-form.module').then(m => m.CCrudFormModule),
        resolve: [CCrudFormInserirResolver],
      },
      {
        path: 'excluir/:ids',
        loadChildren: () => import('./form/c-crud-form.module').then(m => m.CCrudFormModule),
        resolve: [CCrudFormExcluirResolver],
      },
      {
        path: ':id/editar',
        loadChildren: () => import('./form/c-crud-form.module').then(m => m.CCrudFormModule),
        resolve: [CCrudFormEditarResolver],
      },
      {
        path: ':id',
        loadChildren: () => import('./form/c-crud-form.module').then(m => m.CCrudFormModule),
        resolve: [CCrudFormVisualizarResolver],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCrudRoutingModule { }
