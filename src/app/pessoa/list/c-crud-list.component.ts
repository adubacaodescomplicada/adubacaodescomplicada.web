import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListComponent } from '../../_crud/list/list.component';
import { CCrudService } from '../c-crud.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';

@Component({
  selector: 'app-c-crud-list',
  templateUrl: './c-crud-list.component.html',
  styleUrls: ['./c-crud-list.component.scss'],
  providers: [CCrudService],
})
export class CCrudListComponent extends ListComponent<PessoaFiltroDTO, Pessoa, Pessoa> {

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
