import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormComponent } from '../../_crud/form/form.component';
import { CCrudService } from '../c-crud.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Component({
  selector: 'app-c-crud-form',
  templateUrl: './c-crud-form.component.html',
  styleUrls: ['./c-crud-form.component.scss'],
  providers: [CCrudService],
})
export class CCrudFormComponent<F, E, L> extends FormComponent<F, E, L> {

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
