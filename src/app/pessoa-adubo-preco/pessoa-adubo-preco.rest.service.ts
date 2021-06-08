import { Injectable } from '@angular/core';

import { CrudService } from '../_crud/crud.service';
import { Pessoa } from '../modelo/entidade/pessoa';
import { PessoaFiltroDTO } from '../modelo/dto/pessoa.filtro.dto';
import { CrudRestService } from '../_crud/crud-rest.service';

@Injectable({ providedIn: 'root' })
export class PessoaAduboPrecoRestService extends CrudRestService<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor(
  ) {
    super();
    this.funcionalidade = 'pessoa-adubo-preco';
  }

}
