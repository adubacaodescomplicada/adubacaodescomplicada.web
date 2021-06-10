import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CrudRestService } from '../_crud/crud-rest.service';
import { PessoaAduboPrecoFiltroDTO } from '../modelo/dto/pessoa-adubo-preco.filtro.dto';
import { PessoaAduboPreco } from '../modelo/entidade/pessoa-adubo-preco';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PessoaAduboPrecoRestService extends CrudRestService<PessoaAduboPrecoFiltroDTO, PessoaAduboPreco, PessoaAduboPreco> {

  constructor(
  ) {
    super();
    this.funcionalidade = 'pessoa-adubo-preco';
  }

  public salvar(lista: PessoaAduboPreco[]): Observable<void> {
    console.log(lista);
    return this.http.post<void>(
      `${environment.REST_API_URL}/${this.funcionalidade}/salvar?pessoa=${this.loginService.dadosLogin.pessoa_id}`,
      lista['items'],
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

}
