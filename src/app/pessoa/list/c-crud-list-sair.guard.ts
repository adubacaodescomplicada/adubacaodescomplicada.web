import { Injectable } from '@angular/core';

import { ListSairGuard } from '../../_crud/list/list-sair.guard';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudListSairGuard extends ListSairGuard<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor() {
    super();
  }

}
