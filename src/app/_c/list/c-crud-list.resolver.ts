import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListResolver } from '../../_crud/list/list.resolver';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudListResolver<F, E, L>  extends ListResolver<F, E, L> {

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
