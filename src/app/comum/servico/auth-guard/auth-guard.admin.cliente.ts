import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LoginService } from '../../../seguranca/login/login.service';
import { MensagemService } from '../mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardAdminClienteService implements CanActivate {

    constructor(
        private _loginService: LoginService,
        private _router: Router,
        private _mensagem: MensagemService,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const temAcesso = this._loginService.estaLogado && this._loginService.temPerfil(['Admin', 'Cliente']);

        if (!temAcesso) {
            this._mensagem.erro('Acesso negado!');
            this._router.navigate(['/']);
        }

        return temAcesso;
    }
}
