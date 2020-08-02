import { Injectable } from '@angular/core';

import { FormSairGuard } from '../../_crud/form/form-sair.guard';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Injectable({ providedIn: 'root' })
export class CCrudFormSairGuard extends FormSairGuard<PessoaFiltroDTO, Pessoa, Pessoa> {

  constructor(
    _mensagem: MensagemService
  ) {
    super(_mensagem);
  }

}
