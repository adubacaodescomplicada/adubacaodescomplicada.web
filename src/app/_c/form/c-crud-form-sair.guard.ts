import { Injectable } from '@angular/core';

import { FormSairGuard } from '../../_crud/form/form-sair.guard';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class CCrudFormSairGuard<E, F, L> extends FormSairGuard<E, F, L> {

  constructor(
    _mensagem: MensagemService
  ) {
    super(_mensagem);
  }

}
