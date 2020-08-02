import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormVisualizarResolver } from '../../_crud/form/form-visualizar.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudFormVisualizarResolver<F, E, L> extends FormVisualizarResolver<F, E, L> {

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
