import { AnaliseSoloParametro } from './../modelo/entidade/analise-solo-parametro';
import { UnidadeMedida } from './../modelo/entidade/unidade-medida';
import { FonteMateriaOrganica } from './../modelo/entidade/fonte-materia-organica';
import { Adubo } from './../modelo/entidade/adubo';
import { FormGroup, FormArray } from '@angular/forms';
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
import { ReceitaFonteMateriaOrganica } from './receita.fonte.materia.organica';
import { FormaAplicacaoAdubo } from '../modelo/entidade/forma-aplicacao-adubo';
import { ReceitaFonteAdubo } from './receita.fonte.adubo';
import { ReceitaReferencia } from '../modelo/entidade/receita_referencia';

@Component({
  selector: 'app-receitar',
  templateUrl: './receitar.component.html',
  styleUrls: ['./receitar.component.scss']
})
export class ReceitarComponent implements OnInit {

  step = 0;
  modelo = { cultura: '' };
  entidade: Receita = null;
  frm: FormGroup;

  aduboList: Adubo[];
  culturaList: Cultura[];
  analiseSoloParametroList: AnaliseSoloParametro[];
  unidadeMedidaList: UnidadeMedida[];
  fonteMateriaOrganicaList: FonteMateriaOrganica[];
  fonteFosforoList: Adubo[];
  fontePotassioList: Adubo[];
  fonteNitrogenioList: Adubo[];
  fonteMicroNutrienteList: Adubo[];
  formaAplicacaoAduboList: FormaAplicacaoAdubo[];
  receitaReferenciaList: ReceitaReferencia[];

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
      resolver[0].apoio.culturaList.subscribe((lista) => {
        lista = lista
          .sort((a, b) => a['nome'].localeCompare(b['nome']))
          .sort((a, b) => a['classificacao'].localeCompare(b['classificacao']))
          .reduce((acc, cur, idx, src) => {
            let classificacaoIdx = acc.map(l => l.nome).indexOf(cur.classificacao);
            if (classificacaoIdx < 0) {
              acc.push({ nome: cur.classificacao, lista: [cur] });
            } else {
              acc[classificacaoIdx].lista.push(cur);
            }
            return acc;
          }, []);

        this.culturaList = lista;
      });
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
      console.log('inicio 0');
      resolver[0].apoio.fonteMateriaOrganicaList.subscribe((lista) => {
        console.log('inicio 1');
        this.fonteMateriaOrganicaList = lista;
      });
      resolver[0].apoio.receitaReferenciaList.subscribe((lista) => this.receitaReferenciaList = lista);

      resolver[0].apoio.aduboList.subscribe((aduboLista) => {
        this.aduboList = aduboLista;

        resolver[0].apoio.garantiaList.subscribe((garantiaLista) => {
          let idList: string[] = [];

          idList = garantiaLista.filter(e => e.codigo === 'P2O5')[0].aduboGarantiaList.flatMap(i => i.adubo.id);
          this.fonteFosforoList = aduboLista.filter(e => idList.indexOf(e.id) > -1);

          idList = garantiaLista.filter(e => e.codigo === 'K2O')[0].aduboGarantiaList.flatMap(i => i.adubo.id);
          this.fontePotassioList = aduboLista.filter(e => idList.indexOf(e.id) > -1);

          idList = garantiaLista.filter(e => e.codigo === 'N')[0].aduboGarantiaList.flatMap(i => i.adubo.id);
          this.fonteNitrogenioList = aduboLista.filter(e => idList.indexOf(e.id) > -1);

          this.fonteMicroNutrienteList = aduboLista.filter(e => e.aduboTipo.codigo === 'micronutriente');

          garantiaLista.filter(e => e.codigo === '').flatMap(e => e.aduboGarantiaList.flat(a => a.adubo));
        });
      });

      this.formaAplicacaoAduboList = [
        { id: 1, nome: 'Sulco', eficienciaNitrogenio: 0.5, eficienciaFosforo: 1, eficienciaPotassio: 0.7 },
        { id: 2, nome: 'A lanço', eficienciaNitrogenio: 0.65, eficienciaFosforo: 1, eficienciaPotassio: 0.75 },
        { id: 3, nome: 'Gotejamento ou microaspersão', eficienciaNitrogenio: 0.8, eficienciaFosforo: 1, eficienciaPotassio: 0.85 }
      ];
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

  filtraFonteMateriaOrganica(fonteMateriaOrganica: FonteMateriaOrganica, frm: FormGroup) {
    const lista = (frm[0].get('receitaFonteMateriaOrganicaList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].fonteMateriaOrganica.codigo === fonteMateriaOrganica.codigo) {
        achou = true;
        break;
      }
    }
    return !achou;
  }


  filtraFonteAdubo(receitaFonteAdubo: ReceitaFonteAdubo, params: any[]) {
    for (const nomeLista of ['receitaFonteFosforoList', 'receitaFontePotassioList', 'receitaFonteNitrogenioList']) {
      const lista = (params[0].get(nomeLista) as FormArray);
      if (lista && lista.value.length) {
        for (let i = 0; i < lista.value.length - (params[1] === nomeLista ? 1 : 0); i++) {
          if (lista.value[i]?.adubo?.id === receitaFonteAdubo.id) {
            return false;
          }
        }
      }
    }
    return true;
  }

  filtraFonteFosforo(fonteFosforo: ReceitaFonteAdubo, frm: FormGroup) {
    const lista = (frm[0].get('receitaFonteFosforoList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].adubo.id === fonteFosforo.id) {
        achou = true;
        break;
      }
    }
    return !achou;
  }

  filtraFontePotassio(fontePotassio: ReceitaFonteAdubo, frm: FormGroup) {
    const lista = (frm[0].get('receitaFontePotassioList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].adubo.id === fontePotassio.id) {
        achou = true;
        break;
      }
    }
    return !achou;
  }

  filtraFonteNitrogenio(fonteNitrogenio: ReceitaFonteAdubo, frm: FormGroup) {
    const lista = (frm[0].get('receitaFonteNitrogenioList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].adubo.id === fonteNitrogenio.id) {
        achou = true;
        break;
      }
    }
    return !achou;
  }

  filtraFonteMicroNutriente(fonteMicroNutriente: Adubo, frm: FormGroup) {
    const lista = (frm[0].get('receitaFonteMicroNutrienteList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].adubo.id === fonteMicroNutriente.id) {
        achou = true;
        break;
      }
    }
    return !achou;
  }

  inserirFonteMateriaOrganica() {
    const lista = (this.frm.get('receitaFonteMateriaOrganicaList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteMateriaOrganica(new ReceitaFonteMateriaOrganica()));
  }

  excluirFonteMateriaOrganica(idx: number) {
    const lista = (this.frm.get('receitaFonteMateriaOrganicaList') as FormArray);
    lista.removeAt(idx);
  }

  inserirFonteFosforo() {
    const lista = (this.frm.get('receitaFonteFosforoList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteAdubo(new ReceitaFonteAdubo()));
  }

  excluirFonteFosforo(idx: number) {
    const lista = (this.frm.get('receitaFonteFosforoList') as FormArray);
    lista.removeAt(idx);
  }

  inserirFontePotassio() {
    const lista = (this.frm.get('receitaFontePotassioList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteAdubo(new ReceitaFonteAdubo()));
  }

  excluirFontePotassio(idx: number) {
    const lista = (this.frm.get('receitaFontePotassioList') as FormArray);
    lista.removeAt(idx);
  }

  inserirFonteNitrogenio() {
    const lista = (this.frm.get('receitaFonteNitrogenioList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteAdubo(new ReceitaFonteAdubo()));
  }

  excluirFonteNitrogenio(idx: number) {
    const lista = (this.frm.get('receitaFonteNitrogenioList') as FormArray);
    lista.removeAt(idx);
  }

  inserirFonteMicroNutriente() {
    const lista = (this.frm.get('receitaFonteMicroNutrienteList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteAdubo(new ReceitaFonteAdubo()));
  }

  excluirFonteMicroNutriente(idx: number) {
    const lista = (this.frm.get('receitaFonteMicroNutrienteList') as FormArray);
    lista.removeAt(idx);
  }

  getReceitaAnaliseSoloParametro(codigo: string) {
    let result = null;
    if (this.frm.value.receitaAnaliseSoloParametroList) {
      for (const r of this.frm.value.receitaAnaliseSoloParametroList) {
        if (r.analiseSoloParametro?.codigo === codigo) {
          result = r;
          break;
        }
      }
    }
    return result;
  }

  private addLista(
    result: { adubo: Adubo | FonteMateriaOrganica, perc: number }[],
    lista: ReceitaFonteAdubo[] | ReceitaFonteMateriaOrganica[]
  ) {
    if (lista && lista.length) {
      for (const linha of lista) {
        if (linha) {
          if (linha['adubo'] && linha['adubo']['id']) {
            result.push({
              adubo: linha['adubo'],
              perc: linha.valor
            });
          } else if (linha['fonteMateriaOrganica'] && linha['fonteMateriaOrganica']['id']) {
            result.push({
              adubo: linha['fonteMateriaOrganica'],
              perc: linha.valor
            });
          }
        }
      }
    }
  }

  getAdubosInformados() {
    const results: { adubo: Adubo, perc: number }[] = [];

    this.addLista(results, this.frm.value.receitaFonteMateriaOrganicaList);
    this.addLista(results, this.frm.value.receitaFonteFosforoList);
    this.addLista(results, this.frm.value.receitaFontePotassioList);
    this.addLista(results, this.frm.value.receitaFonteNitrogenioList);

    return results;
  }

  getMicroNutrientesInformados() {
    const results: { adubo: Adubo, perc: number }[] = [];

    this.addLista(results, this.frm.value.receitaFonteMicroNutrienteList);

    return results;
  }

}
