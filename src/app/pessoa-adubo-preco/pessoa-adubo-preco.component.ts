import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalculadoraService } from '../calculadora/calculadora.service';

import { AduboTipo } from '../modelo/entidade/adubo-tipo';
import { PessoaAduboPreco } from '../modelo/entidade/pessoa-adubo-preco';
import { PessoaAduboPrecoFormService } from './pessoa-adubo-preco-form.service';
import { PessoaAduboPrecoRestService } from './pessoa-adubo-preco.rest.service';

@Component({
  selector: 'app-pessoa-adubo-preco',
  templateUrl: './pessoa-adubo-preco.component.html',
  styleUrls: ['./pessoa-adubo-preco.component.scss']
})
export class PessoaAduboPrecoComponent implements OnInit {

  lista: PessoaAduboPreco[];
  listaFrm: FormGroup;
  aduboTipoLista: AduboTipo[];

  filtro = { aduboTipo: '', conteudo: '' };

  constructor(
    private _route: ActivatedRoute,
    private _service: PessoaAduboPrecoRestService,
    private _formService: PessoaAduboPrecoFormService,
    private _calculadoraService: CalculadoraService,
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(d => {
      this.lista = d.dados;
      if (this.lista) {
        this.lista
          .sort((a, b) => a.adubo.nome.localeCompare(b.adubo.nome))
          .sort((a, b) => a.adubo.aduboTipo.nome.localeCompare(b.adubo.aduboTipo.nome));
        this.aduboTipoLista = [];
        this.lista.forEach(e => {
          if (!this.aduboTipoLista.filter(e1 => e.adubo.aduboTipo.codigo === e1.codigo).length) {
            this.aduboTipoLista.push(e.adubo.aduboTipo);
          };
        });
        this.listaFrm = this._formService.criarLista(this.lista);
      }
    });
  }

  public salvar(): void {
    this._service.salvar(this.listaFrm.value).subscribe(r => console.log('resultado', r));
  }

  public converter(valor): void {
    console.log('valor', valor);
    this._calculadoraService.converteQuilo(valor.value).subscribe((v: any) => {
      console.log('resultado calcula serv', v);
      valor.setValue(v.valor);
    });
  }

  filtrar(elemento: PessoaAduboPreco | any, filtro) {
    filtro = filtro[0];
    elemento = elemento.value;
    return (!filtro.aduboTipo || (filtro.aduboTipo && elemento.adubo.aduboTipo.codigo === filtro.aduboTipo)) &&
      (!filtro.conteudo.trim().length || (filtro.conteudo && elemento.adubo.nome.trim().toLowerCase().includes(filtro.conteudo.trim().toLowerCase())));
  }

}
