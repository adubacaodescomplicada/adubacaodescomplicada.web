import { LayoutComMenuComponent } from './layout/com-menu/layout-com-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrzPaginaNaoEncontradaComponent } from './comum/frz-componentes/frz-pagina-nao-encontrada/frz-pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComMenuComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./casa/casa.module').then(m => m.CasaModule)
      },
      {
        path: 'teste',
        loadChildren: () => import('./_crud/crud.module').then(m => m.CrudModule),
      },
      {
        path: 'modelo',
        loadChildren: () => import('./_c/c-crud.module').then(m => m.CCrudModule),
      },
      {
        path: 'pessoa',
        loadChildren: () => import('./pessoa/c-crud.module').then(m => m.CCrudModule),
      },
      {
        path: 'receitar',
        loadChildren: () => import('./receitar/receitar.module').then(m => m.ReceitarModule),
      },
      {
        path: 'pessoa-adubo-preco',
        loadChildren: () => import('./pessoa-adubo-preco/pessoa-adubo-preco.module').then(m => m.PessoaAduboPrecoModule),
      }
    ]
  },
  {
    path: '**',
    component: FrzPaginaNaoEncontradaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
