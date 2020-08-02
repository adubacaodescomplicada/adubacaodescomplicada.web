import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

import { Servico } from '../_servico';
import { CrudService } from '../crud.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CrudService],
})
export class ListComponent<F, E, L> extends Servico<F, E, L> implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
    this.service.colunaList = ['select', 'id', 'nome', 'codigo', 'descricao', 'marcar'];
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(resolve => {
      resolve[0][0].subscribe(lista => resolve[0][1].subscribe(selecao => {
        this.carregar(lista, selecao);
      }));
    });
    this.configBotoes();
  }

  ngAfterViewInit() {
    this.service.listaDataSource.sort = this.sort;
  }

  protected configBotoes() {
    const selecaoVazia = this.service.selecao.isEmpty();
    for (const btn of this.service.botaoList) {
      switch (btn.codigo) {
        case 'inserir':
          btn.acao = (evento, botao) => {
            this.router.navigate(['inserir'], { relativeTo: this.activatedRoute });
          };
          break;
        case 'filtrar':
          btn.acao = (evento, botao) => {
            this.router.navigate(['filtrar'], { relativeTo: this.activatedRoute });
          };
          break;
        case 'visualizar':
          btn.acao = (evento, botao) => {
            this.visualizar(null);
          };
          this.service.selecao.changed.subscribe((evt) => {
            btn.visivel = !evt.source.isEmpty();
          });
          btn.visivel = !selecaoVazia;
          break;
        case 'lerMais':
          btn.acao = (evento, botao) => {
            this.service.temMais = false;
            btn.desabilitado = !this.service.temMais;
            if (btn.desabilitado) {
              this.mensagem.atencao('Todos os registros foram lidos na base de dados');
            }
          };
          break;
        case 'excluir':
          btn.acao = (evento, botao) => {
            this.excluir(null);
          };
          this.service.selecao.changed.subscribe((evt) => {
            btn.visivel = !evt.source.isEmpty();
          });
          btn.visivel = !selecaoVazia;
          break;
        case 'agir':
          this.service.selecao.changed.subscribe((evt) => {
            btn.visivel = !evt.source.isEmpty() && btn.subBotaoList.length > 0;
          });
          btn.visivel = !selecaoVazia && btn.subBotaoList.length > 0;
          break;
      }
    }
  }

  protected carregar(valor: E[] | L[], selecao: number[]) {
    // TODO - criar o componente de manutencao da lista
    if (this.service) {
      this.service.lista = valor;
    }
    if (valor && valor.length) {
      try {
        this.service.listaDataSource = new MatTableDataSource(valor as E[]);
      } catch {
        this.service.listaDataSource = new MatTableDataSource(valor as L[]);
      }
    } else {
      this.service.listaDataSource = new MatTableDataSource();
    }
    if (!this.service.selecao) {
      this.service.selecao = new SelectionModel<number>(true, selecao.map(v => Number(v)) || []);
    }
    this.aposCarregar(valor, selecao);
  }

  protected aposCarregar(valor: E[] | L[], selecao: number[]) {
  }

  public aplicarFiltro(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.service.listaDataSource.filter = filtro.trim().toLowerCase();
  }

  public estaTudoSelecionado() {
    const numSelected = this.service.selecao.selected
      .filter((value, index, array) => array.indexOf(value) === index).length;
    const numRows = this.service.listaDataSource.data.map(v => v['id'])
      .filter((value, index, array) => array.indexOf(value) === index).length;
    return numSelected === numRows;
  }

  public alternarSelecao() {
    this.estaTudoSelecionado() ?
      this.service.selecao.clear() :
      this.service.listaDataSource.data.forEach(row => this.service.selecao.select(row['id']));
  }

  public etiquetaSelecao(row?: E | L): string {
    if (!row) {
      return `${this.estaTudoSelecionado() ? 'select' : 'deselect'} all`;
    }
    return `${this.service.selecao.isSelected(row['id']) ? 'deselect' : 'select'} row ${row['position'] + 1}`;
  }

  public excluir(id: number) {
    if (!id) {
      id = (this.service.selecao.selected[0]);
    }
    if (!this.service.selecao.isSelected(id)) {
      this.service.selecao.select(id);
    }
    this.router.navigate(['./', id, 'excluir'], { relativeTo: this.activatedRoute });
  }

  public visualizar(id: number) {
    if (!id) {
      id = (this.service.selecao.selected[0]);
    }
    if (!this.service.selecao.isSelected(id)) {
      this.service.selecao.select(id);
    }
    this.router.navigate(['./', id], { relativeTo: this.activatedRoute });
  }

}
