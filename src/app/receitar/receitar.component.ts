import { Adubo } from './../modelo/entidade/adubo';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cultura } from '../modelo/entidade/cultura';
import { ReceitarService } from './receitar.service';
import { MensagemService } from './../comum/servico/mensagem/mensagem.service';
import { LoginService } from './../seguranca/login/login.service';
import { ReceitarFormService } from './receitar-form.service';
import { idListComparar } from '../comum/ferramenta/ferramenta-comum';
import { Receita } from './receita';
import { Pessoa } from '../modelo/entidade/pessoa';
import { ReceitaAnaliseSoloParametro } from './receita.analise.solo.parametro';

@Component({
  selector: 'app-receitar',
  templateUrl: './receitar.component.html',
  styleUrls: ['./receitar.component.scss']
})
export class ReceitarComponent implements OnInit {

  step = 0;
  modelo = { cultura: '' };
  entidade = null;
  frm: FormGroup;

  aduboList: [];
  culturaList: [];
  analiseSoloParametroList: [];
  unidadeMedidaList: [];
  fosforoList: {
    id: number,
    nome: string,
  }[] = [
      {
        id: 1,
        nome: 'Nitrato de cálcio'
      },
      {
        id: 2,
        nome: 'Termofosfato YOORIN'
      },
      {
        id: 3,
        nome: 'Nitrato de cálcio'
      }
    ];
  potacioList: [{
    id: number,
    nome: string,
  }] = [
      {
        id: 1,
        nome: 'Kmag'
      },
    ];
  nitrogenioList: [{
    id: number,
    nome: string,
  }] = [
      {
        id: 1,
        nome: 'Torta de mamona Hortibraz'
      },
    ];

  constructor(
    private service: ReceitarService,
    private serviceForm: ReceitarFormService,
    private loginService: LoginService,
    private mensagem: MensagemService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolver) => {
      resolver[0].apoio.aduboList.subscribe((lista) => this.aduboList = lista);
      resolver[0].apoio.culturaList.subscribe((lista) => this.culturaList = lista);
      resolver[0].apoio.analiseSoloParametroList.subscribe((lista) => {
        this.analiseSoloParametroList = lista.sort((a, b) => a.ordem > b.ordem ? 1 : (a.ordem < b.ordem ? -1 : 0));
        const entidade = new Receita();
        entidade.data = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDate()}`;
        entidade.pessoa = new Pessoa();
        entidade.pessoa.id = this.loginService.dadosLogin.pessoa_id;
        entidade.pessoa.nome = this.loginService.dadosLogin.nome;
        entidade.culturaTipo = null;
        entidade.cultura = null;
        entidade.receitaAnaliseSoloParametroList = [];
        for (const analiseSoloParametro of this.analiseSoloParametroList) {
          const receitaAnaliseSoloParametro = new ReceitaAnaliseSoloParametro();
          receitaAnaliseSoloParametro.analiseSoloParametro = Object.assign({}, analiseSoloParametro);
          receitaAnaliseSoloParametro.valor = 0;
          entidade.receitaAnaliseSoloParametroList.push(receitaAnaliseSoloParametro);
        }
        this.carregar(entidade);
      });
      resolver[0].apoio.unidadeMedidaList.subscribe((lista) => this.unidadeMedidaList = lista);
    });
    if (!this.loginService.estaLogado) {
      this.mensagem.erro(`Faça o login primeiro`);
      this.router.navigate(['/']);
    }
    if (!this.loginService.dadosLogin.pessoa_id) {
      this.mensagem.erro(`Faltam as informações pessoais do usuário ${this.loginService.dadosLogin.username}!`);
      this.router.navigate(['/', 'login']);
    }
  }

  protected carregar(valor: any) {
    if (this.service) {
      this.service.entidade = valor;
    }
    if (this.serviceForm) {
      this.frm = this.serviceForm.criarForm(valor);
    }
    this.aposCarregar(valor);
  }

  protected aposCarregar(valor: any) {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  idListComparar2(o1, o2) {
    return idListComparar(o1, o2);
  }

  filtraCulturaTipo(cultura: Cultura, culturaTipo: string) {
    return culturaTipo && culturaTipo.length && (
      (culturaTipo === 'F' && cultura.formacao === 'S') ||
      (culturaTipo === 'P' && cultura.producao === 'S'));
  }

  filtraAduboTipo(adubo: Adubo, aduboTipo: string) {
    return aduboTipo && aduboTipo.length && aduboTipo[0] === adubo.aduboTipo.codigo;
  }
}
