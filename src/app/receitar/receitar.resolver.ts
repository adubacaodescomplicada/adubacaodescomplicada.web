import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ReceitarService } from './receitar.service';
import { LoginService } from '../seguranca/login/login.service';
import { PessoaAduboPrecoFiltroDTO } from '../modelo/dto/pessoa-adubo-preco.filtro.dto';
import { Pessoa } from '../modelo/entidade/pessoa';
import { PessoaAduboPrecoRestService } from '../pessoa-adubo-preco/pessoa-adubo-preco.rest.service';

@Injectable({ providedIn: 'root' })
export class ReceitarResolver implements Resolve<any> {

  constructor(
    private service: ReceitarService,
    private _pessoaAduboPrecoRestService: PessoaAduboPrecoRestService,
    private _loginService: LoginService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let filtro = new PessoaAduboPrecoFiltroDTO();
    filtro.pessoa = new Pessoa();
    filtro.pessoa.id = this._loginService.dadosLogin.pessoa_id;

    return {
      principal: null,
      apoio: {
        culturaList: this.service.culturaList(),
        analiseSoloParametroList: this.service.analiseSoloParametroList(),
        unidadeMedidaList: this.service.unidadeMedidaList(),
        aduboList: this.service.aduboList(),
        garantiaList: this.service.garantiaList(),
        referenciaBibliograficaList: this.service.referenciaBibliograficaList(),
        pessoaAduboPrecoList: this._pessoaAduboPrecoRestService.filtrar(filtro),
      }
    };
  }

}
