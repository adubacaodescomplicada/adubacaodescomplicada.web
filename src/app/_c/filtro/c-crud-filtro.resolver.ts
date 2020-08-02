import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FiltroResolver } from '../../_crud/filtro/filtro.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudFiltroResolver<F, E, L> extends FiltroResolver<F, E, L> {

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
