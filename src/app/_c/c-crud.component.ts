import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrudComponent } from '../_crud/crud.component';
import { CCrudService } from './c-crud.service';
import { MensagemService } from '../comum/servico/mensagem/mensagem.service';

@Component({
  selector: 'app-c-crud',
  templateUrl: './c-crud.component.html',
  styleUrls: ['./c-crud.component.scss'],
  providers: [CCrudService],
})
export class CCrudComponent<F, E, L> extends CrudComponent<F, E, L> {

  constructor(
    _router: Router,
    _activatedRoute: ActivatedRoute,
    _mensagem: MensagemService,
    _cdref: ChangeDetectorRef,
  ) {
    super(
      _router,
      _activatedRoute,
      _mensagem,
      _cdref,
    );
  }

}
