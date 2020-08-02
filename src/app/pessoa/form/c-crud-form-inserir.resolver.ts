import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormInserirResolver } from '../../_crud/form/form-inserir.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudFormInserirResolver extends FormInserirResolver<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor(
    _router: Router,
    _activatedRoute: ActivatedRoute,
    _mensagem: MensagemService,
  ) {
    super(
      _router,
      _activatedRoute,
      _mensagem,
    );
  }

}
