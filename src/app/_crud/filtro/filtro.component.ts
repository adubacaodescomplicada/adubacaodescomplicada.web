import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Servico } from '../_servico';
import { CrudEstado } from '../crud-estado';
import { CrudService } from '../crud.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
  providers: [CrudService],
})
export class FiltroComponent<F, E, L> extends Servico<F, E, L> implements OnInit, AfterViewInit {

  private _frm: FormGroup;

  value = '';

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

  public get frm(): FormGroup {
    return this._frm;
  }

  public set frm(valor: FormGroup) {
    this._frm = valor;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(r => {
      this.carregar(r[0] as F);
    });
    this.configBotoes();
  }

  ngAfterViewInit() {
  }

  protected configBotoes() {
    for (const btn of this.service.botaoList) {
      switch (btn.codigo) {
        case 'inserir':
          btn.acao = (evento, botao) => {
            this.router.navigate(['../../', 'inserir'], { relativeTo: this.activatedRoute });
          };
          break;
        case 'confirmar':
          btn.acao = (evento, botao) => {
            this.enviar();
          };
          break;
        case 'cancelar':
          btn.acao = (evento, botao) => {
            this.restaurar();
            this.voltar();
          };
          break;
        case 'restaurar':
          btn.acao = (evento, botao) => {
            this.restaurar();
          };
          break;
        case 'agir':
          btn.visivel = btn.subBotaoList.length > 0;
          break;
      }
    }
  }

  protected carregar(valor: F) {
    if (this.service) {
      this.service.filtro = valor;
    }
    if (this.serviceForm) {
      this.frm = this.serviceForm.criarFiltro(valor);
    }
    this.aposCarregar(valor);
  }

  protected aposCarregar(valor: F) {
  }

  protected enviar(): void {
    const filtro: F = this.frm.value;
    if (this.antesEnviar(this.service.estado, filtro)) {
      this.service.filtro = filtro;
      this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
    }
  }

  protected antesEnviar(acao: CrudEstado | string, valor: F): boolean {
    return true;
  }

  protected restaurar() {
    this.carregar(this.service.filtro);
  }

  protected voltar() {
    switch (this.service.estadoAnterior) {
      case CrudEstado.VISUALIZANDO:
        this.router.navigate(['../../', 1], { relativeTo: this.activatedRoute });
        break;
      default:
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        break;
    }
  }

}
