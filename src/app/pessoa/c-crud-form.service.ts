import { Injectable } from '@angular/core';

import { CrudFormService } from '../_crud/crud-form.service';
import { PessoaFiltroDTO } from '../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudFormService extends CrudFormService<PessoaFiltroDTO, Pessoa, Pessoa> {

    constructor(
    ) {
        super();
    }

}
