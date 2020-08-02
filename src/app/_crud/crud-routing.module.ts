import { CrudSairGuard } from './crud-sair.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './crud.component';
import { CrudFormResolver } from './crud.resolver';
import { CrudEntrarGuard } from './crud-entrar.guard';
import { FormInserirResolver } from './form/form-inserir.resolver';
import { FormEditarResolver } from './form/form-editar.resolver';
import { FormVisualizarResolver } from './form/form-visualizar.resolver';
import { FormExcluirResolver } from './form/form-excluir.resolver';

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    resolve: [CrudFormResolver],
    canActivate: [CrudEntrarGuard],
    canDeactivate: [CrudSairGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule),
      },
      {
        path: 'filtrar',
        loadChildren: () => import('./filtro/filtro.module').then(m => m.FiltroModule),
      },
      {
        path: 'inserir',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule),
        resolve: [FormInserirResolver],
      },
      {
        path: 'excluir/:ids',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule),
        resolve: [FormExcluirResolver],
      },
      {
        path: ':id/editar',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule),
        resolve: [FormEditarResolver],
      },
      {
        path: ':id',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule),
        resolve: [FormVisualizarResolver],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
