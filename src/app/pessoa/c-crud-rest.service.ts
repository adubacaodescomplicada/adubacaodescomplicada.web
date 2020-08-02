import { Injectable } from '@angular/core';

import { CrudRestService } from '../_crud/crud-rest.service';
import { PessoaFiltroDTO } from '../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudRestService extends CrudRestService<PessoaFiltroDTO, Pessoa, Pessoa> {

    constructor(
    ) {
        super();
    }

}
