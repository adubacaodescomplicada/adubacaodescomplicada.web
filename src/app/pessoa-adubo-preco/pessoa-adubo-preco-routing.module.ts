import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaAduboPrecoComponent } from './pessoa-adubo-preco.component';
import { PessoaAduboPrecoFormResolver } from './pessoa-adubo-preco.resolver';

const routes: Routes = [
  {
    path: '',
    component: PessoaAduboPrecoComponent,
    resolve: {dados: PessoaAduboPrecoFormResolver},
    // canActivate: [CCrudEntrarGuard],
    // canDeactivate: [CCrudSairGuard],
    /*
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
    ]*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaAduboPrecoRoutingModule { }
