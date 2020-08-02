import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FiltroComponent } from '../../_crud/filtro/filtro.component';
import { CCrudService } from '../c-crud.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Component({
  selector: 'app-c-crud-filtro',
  templateUrl: './c-crud-filtro.component.html',
  styleUrls: ['./c-crud-filtro.component.scss'],
  providers: [CCrudService],
})
export class CCrudFiltroComponent extends FiltroComponent<PessoaFiltroDTO, Pessoa, Pessoa> {

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
