import { TrocarSenhaResolve } from './trocar-senha.resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocarSenhaComponent } from './trocar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: TrocarSenhaComponent,
    resolve: [TrocarSenhaResolve]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrocarSenhaRoutingModule { }
