import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { PessoaFiltroDTO } from '../modelo/dto/pessoa.filtro.dto';
import { CrudFormResolver } from '../_crud/crud.resolver';
import { PessoaAduboPrecoRestService } from './pessoa-adubo-preco.rest.service';

@Injectable({ providedIn: 'root' })
export class PessoaAduboPrecoFormResolver extends CrudFormResolver {

  constructor(
    private _service: PessoaAduboPrecoRestService
  ) {
    super();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this._service.filtrar(new PessoaFiltroDTO());
  }

}
