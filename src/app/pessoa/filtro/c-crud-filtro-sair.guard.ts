import { Injectable } from '@angular/core';

import { FiltroSairGuard } from '../../_crud/filtro/filtro-sair.guard';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudFiltroSairGuard extends FiltroSairGuard<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor() {
    super();
   }

}
