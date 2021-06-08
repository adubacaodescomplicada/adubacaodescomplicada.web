import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AduboTipo } from '../modelo/entidade/adubo-tipo';
import { PessoaAduboPreco } from '../modelo/entidade/pessoa-adubo-preco';

@Component({
  selector: 'app-pessoa-adubo-preco',
  templateUrl: './pessoa-adubo-preco.component.html',
  styleUrls: ['./pessoa-adubo-preco.component.scss']
})
export class PessoaAduboPrecoComponent implements OnInit {

  lista: PessoaAduboPreco[];
  aduboTipoLista: AduboTipo[];

  constructor(
    private _route: ActivatedRoute
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
        console.log(this.aduboTipoLista);
      }
    });
  }

}
