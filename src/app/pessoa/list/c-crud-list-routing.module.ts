import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCrudListComponent } from './c-crud-list.component';
import { CCrudListEntrarGuard } from './c-crud-list-entrar.guard';
import { CCrudListSairGuard } from './c-crud-list-sair.guard';
import { CCrudListResolver } from './c-crud-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: CCrudListComponent,
    canActivate: [CCrudListEntrarGuard],
    canDeactivate: [CCrudListSairGuard],
    resolve: [CCrudListResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCrudListRoutingModule { }
