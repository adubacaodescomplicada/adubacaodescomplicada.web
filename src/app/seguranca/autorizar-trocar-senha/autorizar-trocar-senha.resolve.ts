import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({
    providedIn: 'root'
})
export class AutorizarTrocarSenhaResolve implements Resolve<any> {

    constructor(
        private _router: Router,
        private _mensagem: MensagemService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
        const urls = state.url.split('/');
        let email = null;
        let token = null;
        if (urls.length === 4) {
            email = urls[urls.length - 2];
            token = urls[urls.length - 1];
        } else {
            email = urls[urls.length - 1];
        }
        if (!email) {
            this._mensagem.erro('E-mail não informado');
            this._router.navigate(['recuperar-senha']);
        }
        return {
            email,
            token
        };
    }

}
