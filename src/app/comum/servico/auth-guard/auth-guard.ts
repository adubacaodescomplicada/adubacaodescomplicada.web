import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LoginService } from '../../../seguranca/login/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    constructor(
        private _loginService: LoginService,
        private _router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const logado = this._loginService.estaLogado;

        if (!logado) {
            this._router.navigate(['/', 'login']);
        }

        return logado;
    }
}
