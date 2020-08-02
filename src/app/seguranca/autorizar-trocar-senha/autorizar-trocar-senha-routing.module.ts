import { AutorizarTrocarSenhaResolve } from './autorizar-trocar-senha.resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizarTrocarSenhaComponent } from './autorizar-trocar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: AutorizarTrocarSenhaComponent,
    resolve: [AutorizarTrocarSenhaResolve],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizarTrocarSenhaRoutingModule { }
