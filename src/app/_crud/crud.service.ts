import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { CrudEstado } from './crud-estado';
import { FrzBotao } from '../comum/frz-componentes/frz-barra-acoes/frz-botao';

const ESTADO_INICIAL = CrudEstado.LISTANDO;

@Injectable({ providedIn: 'root' })
export class CrudService<F, E, L> {

  private _funcionalidade: string;
  private _estado: string | CrudEstado = null;
  private _estadoAnteriorList: string[] | CrudEstado[] = [];

  private _filtro: F;
  private _entidade: E;
  private _lista: E[] | L[];

  private _filtroForm: FormGroup;
  private _entidadeForm: FormGroup;
  private _listaDataSource: MatTableDataSource<E | L>;
  private _colunaList: string[];
  private _selecao: SelectionModel<number>;

  private _temMais = true;

  protected inserirBtn = new FrzBotao('Inserir', 'Inserir um novo registro na base', 'add',
    'accent', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected filtrarBtn = new FrzBotao('Filtrar', 'Filtrar registros na base', 'filter_alt',
    'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected listarBtn = new FrzBotao('Listar', 'Listar registros da base', 'list',
    'warn', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected lerMaisBtn = new FrzBotao('Ler Mais', 'Ler mais registros na base', 'arrow_circle_down',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected visualizarBtn = new FrzBotao('Visualizar', 'Visualizar o registro', 'remove_red_eye',
    'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected editarBtn = new FrzBotao('Editar', 'Editar o registro', 'create',
    'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected excluirBtn = new FrzBotao('Excluir', 'Excluir o registro', 'delete',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected agirBtn = new FrzBotao('Agir', 'Ações Extra com o registro', 'filter_list',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }, false, []);

  protected primeiroBtn = new FrzBotao('Primeiro', 'Ir para o primeiro registro', 'first_page',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected anteriorBtn = new FrzBotao('Anterior', 'Ir para o registro anterior', 'chevron_left',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected proximoBtn = new FrzBotao('Próximo', 'Ir para o próximo registro', 'chevron_right',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected ultimoBtn = new FrzBotao('Último', 'Ir para o último registro', 'last_page',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected navegarBtn = new FrzBotao('Navegar', '', '', '', true, false, null, true, [
    this.primeiroBtn,
    this.anteriorBtn,
    this.proximoBtn,
    this.ultimoBtn,
  ]);

  protected confirmarBtn = new FrzBotao('Confirmar', 'Confirmar Operação', 'done',
    'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected cancelarBtn = new FrzBotao('Cancelar', 'Cancelar Operação', 'clear',
    '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected restaurarBtn = new FrzBotao('Restaurar', 'Restaurar os dados', 'restore',
    'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  protected voltarBtn = new FrzBotao('Voltar', 'Voltar para página anterior', 'restore',
    'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    });

  private _botaoList: FrzBotao[] = [
    this.inserirBtn,
    this.filtrarBtn,
    this.visualizarBtn,
    this.lerMaisBtn,
    this.listarBtn,
    this.editarBtn,
    this.navegarBtn,
    this.excluirBtn,
    this.confirmarBtn,
    this.cancelarBtn,
    this.voltarBtn,
    this.restaurarBtn,
    this.agirBtn,
    new FrzBotao('Descer', '', 'keyboard_arrow_down', 'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }),
    new FrzBotao('Subir', '', 'keyboard_arrow_up', 'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }),
    new FrzBotao('Anexar', '', 'attachment', 'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }),
    new FrzBotao('Encontrar', '', 'search', 'primary', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }),
    new FrzBotao('Acaoxx', '', 'assignment_turned_in', '', false, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }),
    new FrzBotao('Acaoxy?', '', 'description', '', true, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }, false, [
      new FrzBotao('Acaoxw', '', 'assignment_turned_in', '', true, false, (event, botao) => {
        event.preventDefault();
        console.log('pressionado', botao);
      }),
      new FrzBotao('Acaoxq', '', 'assignment_turned_in', '', false, false, (event, botao) => {
        event.preventDefault();
        console.log('pressionado', botao);
      })
    ]),
    new FrzBotao('acao2w', '', 'fact_check', '', false, false, (event, botao) => {
      event.preventDefault();
      console.log('pressionado', botao);
    }),
  ];

  private _estadoMap = new Map<CrudEstado | string, string[] | FrzBotao[]>();

  constructor(
  ) {
    this._estadoMap.set(CrudEstado.LISTANDO, ['inserir', 'filtrar', 'visualizar', 'lerMais', 'excluir', 'agir']);
    this._estadoMap.set(CrudEstado.FILTRANDO, ['inserir', 'confirmar', 'cancelar', 'restaurar', 'agir']);
    this._estadoMap.set(CrudEstado.INSERINDO, ['inserir', 'confirmar', 'cancelar', 'agir']);
    this._estadoMap.set(CrudEstado.VISUALIZANDO, ['inserir', 'filtrar', 'editar', 'navegar', 'excluir', 'voltar', 'agir']);
    this._estadoMap.set(CrudEstado.EDITANDO, ['inserir', 'confirmar', 'cancelar', 'restaurar', 'agir']);
    this._estadoMap.set(CrudEstado.EXCLUINDO, ['confirmar', 'cancelar', 'agir']);
  }

  public get funcionalidade(): string {
    return this._funcionalidade;
  }

  public get estado(): string | CrudEstado {
    if (!this._estado) {
      this._estado = ESTADO_INICIAL;
    }
    return this._estado;
  }

  public set estado(valor: string | CrudEstado) {
    const temp = [];
    this._estadoAnteriorList.forEach((e) => temp.push(e));
    if (this.estadoAnterior !== this.estado) {
      temp.push(this.estado);
    }
    this._estadoAnteriorList = temp;
    this._estado = valor;
  }

  public get estadoAnteriorList(): CrudEstado[] | string[] {
    return this._estadoAnteriorList;
  }

  public get estadoAnterior(): CrudEstado | string {
    return this._estadoAnteriorList[this._estadoAnteriorList.length - 1];
  }

  public get filtro(): F {
    return this._filtro;
  }

  public set filtro(valor: F) {
    this._filtro = valor;
  }

  public get entidade(): E {
    return this._entidade;
  }

  public set entidade(valor: E) {
    this._entidade = valor;
  }

  public get lista(): E[] | L[] {
    return this._lista;
  }

  public set lista(valor: E[] | L[]) {
    this._lista = valor;
  }

  public get filtroForm(): FormGroup {
    return this._filtroForm;
  }

  public set filtroForm(valor: FormGroup) {
    this._filtroForm = valor;
  }

  public get entidadeForm(): FormGroup {
    return this._entidadeForm;
  }

  public set entidadeForm(valor: FormGroup) {
    this._entidadeForm = valor;
  }

  public get colunaList(): string[] {
    return this._colunaList;
  }

  public set colunaList(valor: string[]) {
    this._colunaList = valor;
  }

  public get listaDataSource(): MatTableDataSource<E | L> {
    return this._listaDataSource;
  }

  public set listaDataSource(valor: MatTableDataSource<E | L>) {
    this._listaDataSource = valor;
  }

  public get selecao(): SelectionModel<number> {
    return this._selecao;
  }

  public set selecao(valor: SelectionModel<number>) {
    this._selecao = valor;
  }

  public getBotao(codigoList: string[] | FrzBotao[]): FrzBotao[] {
    codigoList = (codigoList as Array<string | FrzBotao>).map(
      (c: string | FrzBotao) =>
        typeof c === 'string' ? c.toLowerCase() : c.codigo.toLowerCase());
    const result = [];
    codigoList.forEach(codigo => {
      const idx = this.getBotaoIdx(codigo);
      if (idx >= 0) {
        const botao = this._botaoList[idx];
        if (botao.grupo) {
          for (const subBotao of botao.subBotaoList) {
            result.push(subBotao);
          }
        } else {
          result.push(botao);
        }
      }
    });
    return result;
  }

  public getBotaoIdx(codigo: string): number {
    for (let i = 0; i < this._botaoList.length; i++) {
      if (this._botaoList[i].codigo.toLowerCase() === codigo) {
        return i;
      }
    }
    return -1;
  }

  public get botaoList() {
    const result = this._estadoMap.get(this.estado);
    return this.getBotao(result);
  }

  public get estadoMap(): Map<CrudEstado | string, string[] | FrzBotao[]> {
    return this._estadoMap;
  }

  public definirBotao(botao: FrzBotao) {
    const idx = this.getBotaoIdx(botao.codigo);
    if (idx >= 0) {
      this._botaoList[idx] = botao;
    } else {
      this._botaoList.push(botao);
    }
  }

  public get temMais() {
    return this._temMais;
  }
  public set temMais(valor: boolean) {
    this._temMais = valor;
  }

}
