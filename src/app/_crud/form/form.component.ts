import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Servico } from '../_servico';
import { CrudEstado } from '../crud-estado';
import { CrudService } from '../crud.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { asNumber } from '../../comum/ferramenta/ferramenta-comum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [CrudService],
})
export class FormComponent<F, E, L> extends Servico<F, E, L> implements OnInit, AfterViewInit {

  private _frm: FormGroup;
  private _id: number;

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

  public get id(): number {
    return this._id;
  }

  public set id(valor: number) {
    this._id = valor;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => this.id = asNumber(p.id));
    this.activatedRoute.data.subscribe(r => {
      this.carregar(r[0] as E);
    });
    this.configBotoes();
  }

  ngAfterViewInit() {
  }

  protected configBotoes() {
    let totalSelecao = 0;
    if (this.service.selecao && this.service.selecao.selected) {
      totalSelecao = this.service.selecao.selected.length;
    }
    for (const btn of this.service.botaoList) {
      switch (btn.codigo) {
        case 'inserir':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
              btn.acao = (evento, botao) => {
                this.router.navigate(['../'], { relativeTo: this.activatedRoute });
              };
              break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                this.router.navigate(['../../', 'inserir'], { relativeTo: this.activatedRoute });
              };
              break;
            case CrudEstado.EDITANDO:
              btn.acao = (evento, botao) => {
                this.router.navigate(['../../../', 'inserir'], { relativeTo: this.activatedRoute });
              };
              break;
          }
          break;
        case 'filtrar':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO:
              break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                this.router.navigate(['../../', 'filtrar'], { relativeTo: this.activatedRoute });
              };
              break;
          }
          break;
        case 'editar':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO:
              break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                this.router.navigate(['editar'], { relativeTo: this.activatedRoute });
              };
              break;
          }
          break;
        case 'primeiro':
          btn.visivel = totalSelecao > 1;
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO: break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                const idx = this.service.selecao.selected.indexOf(Number(this.id));
                if (idx > 0) {
                  this.id = Number(this.service.selecao.selected[0]);
                  this.enviar();
                } else {
                  this.mensagem.atencao('Início alcançado');
                }
              };
              break;
          }
          break;
        case 'anterior':
          btn.visivel = totalSelecao > 1;
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO: break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                const idx = this.service.selecao.selected.indexOf(Number(this.id));
                if (idx > 0) {
                  this.id = asNumber(this.service.selecao.selected[idx - 1]);
                  this.enviar();
                } else {
                  this.mensagem.atencao('Início alcançado');
                }
              };
              break;
          }
          break;
        case 'proximo':
          btn.visivel = totalSelecao > 1;
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO: break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                const idx = this.service.selecao.selected.indexOf(Number(this.id));
                if (idx < this.service.selecao.selected.length - 1) {
                  this.id = asNumber(this.service.selecao.selected[idx + 1]);
                  this.enviar();
                } else {
                  this.mensagem.atencao('Final alcançado');
                }
              };
              break;
          }
          break;
        case 'ultimo':
          btn.visivel = totalSelecao > 1;
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO: break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                const idx = this.service.selecao.selected.indexOf(Number(this.id));
                if (idx < this.service.selecao.selected.length - 1) {
                  this.id = Number(this.service.selecao.selected[this.service.selecao.selected.length - 1]);
                  this.enviar();
                } else {
                  this.mensagem.atencao('Final alcançado');
                }
              };
              break;
          }
          break;
        case 'confirmar':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO: break;
            case CrudEstado.VISUALIZANDO: break;
            case CrudEstado.EDITANDO: break;
          }
          break;
        case 'cancelar':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO:
              btn.acao = (evento, botao) => {
                this.voltar();
              };
              break;
            case CrudEstado.VISUALIZANDO: break;
          }
          break;
        case 'restaurar':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO: break;
            case CrudEstado.VISUALIZANDO: break;
            case CrudEstado.EDITANDO: break;
          }
          break;
        case 'excluir':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO: break;
            case CrudEstado.VISUALIZANDO: break;
            case CrudEstado.EDITANDO: break;
          }
          break;
        case 'voltar':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.EDITANDO:
              break;
            case CrudEstado.VISUALIZANDO:
              btn.acao = (evento, botao) => {
                this.voltar();
              };
              break;
          }
          break;
        case 'agir':
          switch (this.service.estado) {
            case CrudEstado.INSERINDO:
            case CrudEstado.VISUALIZANDO:
            case CrudEstado.EDITANDO:
              btn.visivel = btn.subBotaoList.length > 0;
              break;
          }
          break;
      }
    }
  }

  protected carregar(valor: E) {
    if (this.service) {
      this.service.entidade = valor;
    }
    if (this.serviceForm) {
      this.frm = this.serviceForm.criarForm(valor);
    }
    this.aposCarregar(valor);
  }

  protected aposCarregar(valor: E) {
  }

  protected enviar(): void {
    const entidade: E = this.frm.value;
    if (this.antesEnviar(this.service.estado, entidade)) {
      switch (this.service.estado) {
        case CrudEstado.INSERINDO:
          this.serviceRest.create(entidade).subscribe(id => {
            this.router.navigate(['../../', id], { relativeTo: this.activatedRoute });
          });
          break;
        case CrudEstado.EDITANDO:
          this.serviceRest.update(asNumber(this.id), entidade).subscribe(() => {
            this.router.navigate(['../../../', Number(this.id)], { relativeTo: this.activatedRoute });
          });
          break;
        case CrudEstado.VISUALIZANDO:
          this.router.navigate(['../../', Number(this.id)], { relativeTo: this.activatedRoute });
          break;
      }
    }
  }

  protected antesEnviar(acao: CrudEstado | string, valor: E): boolean {
    return true;
  }

  protected restaurar() {
    if (this.service.estado === CrudEstado.INSERINDO) {
      this.router.navigate(['./']);
    } else {
      this.router.navigate(['./', asNumber(this.id)]);
    }
  }

  protected voltar() {
    switch (this.service.estadoAnterior) {
      case CrudEstado.FILTRANDO:
        this.router.navigate(['../../', 'filtrar'], { relativeTo: this.activatedRoute });
        break;
      case CrudEstado.VISUALIZANDO:
        switch (this.service.estado) {
          case CrudEstado.EDITANDO:
            this.router.navigate(['../../../', asNumber(this.id)], { relativeTo: this.activatedRoute });
            break;
          case CrudEstado.INSERINDO:
            this.router.navigate(['../../', asNumber(this.id)], { relativeTo: this.activatedRoute });
            break;
        }
        break;
      default:
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        break;
    }
  }

}
