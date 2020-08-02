import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ListEntrarGuard } from './list-entrar.guard';
import { ListSairGuard } from './list-sair.guard';
import { ListResolver } from './list.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    canActivate: [ListEntrarGuard],
    canDeactivate: [ListSairGuard],
    resolve: [ListResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
