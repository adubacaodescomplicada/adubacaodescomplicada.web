import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormEditarResolver } from '../../_crud/form/form-editar.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudFormEditarResolver<F, E, L> extends FormEditarResolver<F, E, L> {

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
