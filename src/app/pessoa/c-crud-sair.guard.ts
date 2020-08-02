import { Injectable } from '@angular/core';

import { CrudSairGuard } from '../_crud/crud-sair.guard';
import { PessoaFiltroDTO } from '../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudSairGuard extends CrudSairGuard<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor() {
    super();
  }

}
