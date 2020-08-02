import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

import { Servico } from './_servico';
import { CrudService } from './crud.service';
import { MensagemService } from '../comum/servico/mensagem/mensagem.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [CrudService],
})
export class CrudComponent<F, E, L> extends Servico<F, E, L> implements OnInit, AfterContentChecked {

  constructor(
    _router: Router,
    _activatedRoute: ActivatedRoute,
    _mensagem: MensagemService,
    private cdref: ChangeDetectorRef,
  ) {
    super(
      _router,
      _activatedRoute,
      _mensagem,
    );
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(r => console.log('resolve => ' + JSON.stringify(r)));
  }

  // utilizado para a atualização do datasource em duas etapas
  // uma nula quando o componente é criado
  // outra com o valor quando o componente é inicializado
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  public get acao(): string {
    return this.service ? this.service.estado : null;
  }

  public get funcionalidade(): string {
    return this.service ? this.service.funcionalidade : 'Testando';
  }

  public get totalRegistros(): number {
    return (this.service &&
      this.service.listaDataSource &&
      this.service.listaDataSource.data) ?
      this.service.listaDataSource.data.length :
      0;
  }

}
