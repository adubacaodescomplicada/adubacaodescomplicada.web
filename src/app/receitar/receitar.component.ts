import { Cultura } from './../modelo/entidade/cutura';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagemService } from './../comum/servico/mensagem/mensagem.service';
import { LoginService } from './../seguranca/login/login.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReceitarFormService } from './receitar-form.service';
import { culturaListComparar, unidadeMedidaListComparar } from '../ferramenta-sistema/ferramenta-sistema';

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

  culturaList: [];
  nutrienteList: [];
  unidadeMedidaList: [];
  calcarioList: [{
    id: number,
    nome: string,
  }] = [
      {
        id: 1,
        nome: 'AGROSILICIO'
      }
    ];
  poDeBritaList: [{
    id: number,
    nome: string,
  }] = [
      {
        id: 1,
        nome: 'Pó de brita Fmx'
      }
    ];
  gessoList: [{
    id: number,
    nome: string,
  }] = [
      {
        id: 1,
        nome: 'Gesso Agronelli'
      }
    ];
  realizadaAmostragemSolo4060 = false;
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
  microNutrienteList: {
    id: number,
    nome: string,
  }[] = [
      {
        id: 1,
        nome: 'Ácido Bórico'
      },
      {
        id: 2,
        nome: 'Sulfato de cobre'
      },
      {
        id: 3,
        nome: 'Sulfato de zinco'
      },
      {
        id: 4,
        nome: 'Sulfato de manganês'
      },
    ];

  constructor(
    private loginService: LoginService,
    private formService: ReceitarFormService,
    private mensagem: MensagemService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolver) => {
      resolver[0].apoio.culturaList.subscribe((lista) => this.culturaList = lista);
      resolver[0].apoio.nutrienteList.subscribe((lista) => this.nutrienteList = lista);
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
    const entidade = {
      // data: `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDate()}`,
      data: `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDate()}`,
      pessoa: {
        id: this.loginService.dadosLogin.pessoa_id,
        nome: this.loginService.dadosLogin.nome
      },
      tipo: null,
      cultura: null,
    };
    this.entidade = entidade;
    this.frm = this.formService.criarFrm(this.entidade);
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

  culturaListComparar(o1, o2) {
    return culturaListComparar(o1, o2);
  }
  unidadeMedidaListComparar(o1, o2) {
    return unidadeMedidaListComparar(o1, o2);
  }

  filtraTipoCultura(cultura: Cultura, tipoCultura: string) {
    return tipoCultura && tipoCultura.length && (
      (tipoCultura === 'F' && cultura.formacao === 'S') ||
      (tipoCultura === 'P' && cultura.producao === 'S'));
  }

}
