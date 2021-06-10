import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PessoaAduboPrecoFiltroDTO } from '../modelo/dto/pessoa-adubo-preco.filtro.dto';
import { CrudFormResolver } from '../_crud/crud.resolver';
import { Pessoa } from '../modelo/entidade/pessoa';
import { LoginService } from '../seguranca/login/login.service';
import { PessoaAduboPrecoRestService } from './pessoa-adubo-preco.rest.service';

@Injectable({ providedIn: 'root' })
export class PessoaAduboPrecoFormResolver extends CrudFormResolver {

  constructor(
    private _service: PessoaAduboPrecoRestService,
    private _loginService: LoginService,
  ) {
    super();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    let filtro = new PessoaAduboPrecoFiltroDTO();
    filtro.pessoa = new Pessoa();
    filtro.pessoa.id = this._loginService.dadosLogin.pessoa_id;
    return this._service.filtrar(filtro);
  }

}
