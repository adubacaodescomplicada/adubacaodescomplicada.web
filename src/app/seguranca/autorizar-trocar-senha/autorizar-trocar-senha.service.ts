import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AutorizarTrocarSenha } from '../../modelo/autorizar-trocar-senha';

@Injectable({
  providedIn: 'root'
})
export class AutorizarTrocarSenhaService {

  constructor(
    private _http: HttpClient
  ) {
  }

  public autorizarTrocarSenha(valor: AutorizarTrocarSenha) {
    return this._http.post(environment.AUTHORIZATION_SERVER + `/usuario/autorizar-trocar-senha`, valor);
  }

}
