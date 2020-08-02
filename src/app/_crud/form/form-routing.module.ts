import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { FormEntrarGuard } from './form-entrar.guard';
import { FormSairGuard } from './form-sair.guard';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canActivate: [FormEntrarGuard],
    canDeactivate: [FormSairGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
