import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormExcluirResolver } from '../../_crud/form/form-excluir.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudFormExcluirResolver<F, E, L> extends FormExcluirResolver<F, E, L> {

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
