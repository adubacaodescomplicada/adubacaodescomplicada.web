import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormInserirResolver } from '../../_crud/form/form-inserir.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudFormInserirResolver<F, E, L> extends FormInserirResolver<F, E, L> {

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
