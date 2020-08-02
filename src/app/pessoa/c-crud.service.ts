import { Injectable } from '@angular/core';

import { CrudService } from '../_crud/crud.service';
import { Pessoa } from './../modelo/entidade/pessoa';
import { PessoaFiltroDTO } from './../modelo/dto/pessoa.filtro.dto';

@Injectable({ providedIn: 'root' })
export class CCrudService extends CrudService<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor(
  ) {
    super();
  }

}
