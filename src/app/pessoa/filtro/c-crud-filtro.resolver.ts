import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FiltroResolver } from '../../_crud/filtro/filtro.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudFiltroResolver extends FiltroResolver<PessoaFiltroDTO, Pessoa, Pessoa> {

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
