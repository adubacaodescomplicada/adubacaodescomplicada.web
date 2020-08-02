import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCrudFormComponent } from './c-crud-form.component';
import { CCrudFormEntrarGuard } from './c-crud-form-entrar.guard';
import { CCrudFormSairGuard } from './c-crud-form-sair.guard';

const routes: Routes = [
  {
    path: '',
    component: CCrudFormComponent,
    canActivate: [CCrudFormEntrarGuard],
    canDeactivate: [CCrudFormSairGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCrudFormRoutingModule { }
