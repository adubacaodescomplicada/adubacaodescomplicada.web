import { LayoutSemMenuComponent } from './../layout/sem-menu/layout-sem-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';

import { EfetuaLogoutResolve } from '../comum/servico/resolver/efetua-logout.resolver';

const enderecos = ['login', 'recuperar-senha', 'autorizar-trocar-senha', 'trocar-senha'];

const routes: Routes = [
  {
    matcher: (url) => {
      if (url && url.length > 0 && url[0] && enderecos.indexOf(url[0].path) >= 0) {
        return {
          consumed: [],
        };
      }
      return null;
    },
    component: LayoutSemMenuComponent,
    resolve: { logout: EfetuaLogoutResolve },
    children: [
      {
        matcher: (url) => {
          if (url && url.length === 1 && url[0] && url[0].path === 'login') {
            return {
              consumed: url
            };
          }
          return null;
        },
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
      {
        matcher: (url) => {
          if (url && url.length === 1 && url[0] && url[0].path === 'recuperar-senha') {
            return {
              consumed: url
            };
          }
          return null;
        },
        loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaModule),
      },
      {
        matcher: (url) => {
          if (url && url.length === 2 && url[0] && url[0].path === 'autorizar-trocar-senha') {
            return {
              consumed: url
            };
          }
          return null;
        },
        loadChildren: () => import('./autorizar-trocar-senha/autorizar-trocar-senha.module').then(m => m.AutorizarTrocarSenhaModule),
      },
      {
        matcher: (url) => {
          if (url && url.length === 3 && url[0] && url[0].path === 'autorizar-trocar-senha') {
            return {
              consumed: url
            };
          }
          return null;
        },
        loadChildren: () => import('./autorizar-trocar-senha/autorizar-trocar-senha.module').then(m => m.AutorizarTrocarSenhaModule),
      },
      {
        matcher: (url) => {
          if (url && url.length === 3 && url[0] && url[0].path === 'trocar-senha') {
            return {
              consumed: url
            };
          }
          return null;
        },
        loadChildren: () => import('./trocar-senha/trocar-senha.module').then(m => m.TrocarSenhaModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
