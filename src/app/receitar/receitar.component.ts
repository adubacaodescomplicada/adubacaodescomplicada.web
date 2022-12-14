import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCheckbox } from '@angular/material/checkbox';

import { ReceitarService } from './receitar.service';
import { MensagemService } from './../comum/servico/mensagem/mensagem.service';
import { LoginService } from './../seguranca/login/login.service';
import { ReceitarFormService } from './receitar-form.service';
import { idListComparar, pad } from '../comum/ferramenta/ferramenta-comum';
import { Pessoa } from '../modelo/entidade/pessoa';
import { AnaliseSoloParametro } from './../modelo/entidade/analise-solo-parametro';
import { UnidadeMedida } from './../modelo/entidade/unidade-medida';
import { Adubo } from './../modelo/entidade/adubo';
import { Cultura } from '../modelo/entidade/cultura';
import { FormaAplicacaoAdubo } from '../modelo/entidade/forma-aplicacao-adubo';
import { ReferenciaBibliografica } from '../modelo/entidade/referencia-bibliografica';
import { PessoaAduboPreco } from '../modelo/entidade/pessoa-adubo-preco';
import { FormaIrrigacao } from '../modelo/entidade/forma-irrigacao';
import { CulturaTipo } from '../modelo/entidade/cultura-tipo';
import { Receita } from '../modelo/entidade/receita';
import { ReceitaAnaliseSoloParametro } from '../modelo/entidade/receita-analise-solo-parametro';
import { ReceitaFonteAdubo } from '../modelo/entidade/receita-fonte-adubo';

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
  culturaTipo: CulturaTipo;
  culturaTipoList: CulturaTipo[];
  analiseSoloParametroList: AnaliseSoloParametro[];
  unidadeMedidaList: UnidadeMedida[];
  fonteMateriaOrganicaList: Adubo[];
  fonteFosforoList: Adubo[];
  fontePotassioList: Adubo[];
  fonteNitrogenioList: Adubo[];
  fonteMicroNutrienteList: Adubo[];
  fonteCoberturaList: Adubo[];
  fonteFertirrigacaoList: Adubo[];
  formaIrrigacaoList: FormaIrrigacao[];
  formaAplicacaoAduboList: FormaAplicacaoAdubo[];
  referenciaBibliograficaList: ReferenciaBibliografica[];
  pessoaAduboPrecoList: PessoaAduboPreco[];

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
      resolver[0].apoio.aduboList.subscribe((lista) => {
        this.aduboList = lista;
      });
      resolver[0].apoio.culturaList.subscribe((lista) => {
        this.culturaTipoList = [];
        lista = lista
          .sort((a, b) => a['nome'].localeCompare(b['nome']))
          .sort((a, b) => a['culturaTipo']['nome'].localeCompare(b['culturaTipo']['nome']));
        lista
          .forEach(e => {
            let achou = this.culturaTipoList.map(ct => ct.codigo).indexOf(e.culturaTipo.codigo);
            if (achou < 0) {
              this.culturaTipoList.push(e.culturaTipo);
            }
          });
        this.culturaList = lista;
      });

      resolver[0].apoio.unidadeMedidaList.subscribe((lista) => {
        this.unidadeMedidaList = lista;
      });
      // resolver[0].apoio.referenciaBibliograficaList.subscribe((lista) => {
      //   this.referenciaBibliograficaList = lista;
      // });
      resolver[0].apoio.pessoaAduboPrecoList.subscribe((lista) => {
        this.pessoaAduboPrecoList = lista;
      });

      resolver[0].apoio.aduboList.subscribe((aduboLista) => {
        this.aduboList = aduboLista;

        resolver[0].apoio.garantiaList.subscribe((garantiaLista) => {
          let idList: number[] = [];

          idList = garantiaLista.filter(e => e.codigo === 'P2O5')[0].aduboGarantiaList.flatMap(i => i.adubo.id);
          this.fonteFosforoList = aduboLista.filter((e: Adubo) => idList.indexOf(e.id) > -1);

          idList = garantiaLista.filter(e => e.codigo === 'K2O')[0].aduboGarantiaList.flatMap(i => i.adubo.id);
          this.fontePotassioList = aduboLista.filter((e: Adubo) => idList.indexOf(e.id) > -1);

          idList = garantiaLista.filter(e => e.codigo === 'N')[0].aduboGarantiaList.flatMap(i => i.adubo.id);
          this.fonteNitrogenioList = aduboLista.filter((e: Adubo) => idList.indexOf(e.id) > -1);

          this.fonteMateriaOrganicaList = aduboLista.filter((e: Adubo) => e.aduboTipo.codigo === 'materia_organica');

          this.fonteMicroNutrienteList = aduboLista.filter((e: Adubo) => e.aduboTipo.codigo === 'micronutriente');

          this.fonteCoberturaList = aduboLista.filter((e: Adubo) => e.paraCobertura === 'S');

          this.fonteFertirrigacaoList = aduboLista.filter((e: Adubo) => e.paraFertirrigacao === 'S');

          garantiaLista.filter(e => e.codigo === '').flatMap(e => e.aduboGarantiaList.flat(a => a.adubo));
        });
      });

      // this.formaAplicacaoAduboList = [
      //   { id: 1, nome: 'Sulco', eficienciaNitrogenio: 0.5, eficienciaFosforo: 1, eficienciaPotassio: 0.7 },
      //   { id: 2, nome: 'A lan??o', eficienciaNitrogenio: 0.65, eficienciaFosforo: 1, eficienciaPotassio: 0.75 },
      //   { id: 3, nome: 'Gotejamento ou microaspers??o', eficienciaNitrogenio: 0.8, eficienciaFosforo: 1, eficienciaPotassio: 0.85 }
      // ];

      this.formaIrrigacaoList = [
         { id: 1, nome: 'Aspers??o por sistema autopropelido' },
         { id: 2, nome: 'Aspers??o por sistema convencional' },
         { id: 3, nome: 'Aspers??o por sistema de malha' },
         { id: 4, nome: 'Aspers??o por sistema piv?? central' },
         { id: 5, nome: 'Gotejamento' },
         { id: 6, nome: 'Gotejamento subterr??neo - tubo poroso' },
         { id: 7, nome: 'Micro aspers??o' },
         { id: 8, nome: 'Sulcos' },
         { id: 9, nome: 'Tubos perfurados' },
      ];
      this.formaAplicacaoAduboList = [
        { id: 1, nome: 'A lan??o ou manual', codigo: 'cobertura', eficienciaNitrogenio: 0, eficienciaFosforo: 0, eficienciaPotassio: 0 },
        { id: 2, nome: 'Fertirriga????o (via ??gua de irriga????o)', codigo: 'fertirrigacao', eficienciaNitrogenio: 0, eficienciaFosforo: 0, eficienciaPotassio: 0 },
     ];
            
    });
    if (!this.loginService.estaLogado) {
      this.mensagem.erro(`Fa??a o login primeiro`);
      this.router.navigate(['/']);
      return;
    }
    if (!this.loginService.dadosLogin.pessoa_id) {
      this.mensagem.erro(`Faltam as informa????es pessoais do usu??rio ${this.loginService.dadosLogin.username}!`);
      this.router.navigate(['/', 'login']);
      return;
    }

    this.analiseSoloParametroList = [];
    const entidade = new Receita();
    entidade.data = `${new Date().getFullYear()}-${pad(new Date().getMonth() + 1, 2, '0')}-${pad(new Date().getDate(), 2, '0')}`;
    entidade.pessoa = new Pessoa();
    entidade.pessoa.id = this.loginService.dadosLogin.pessoa_id;
    entidade.pessoa.nome = this.loginService.dadosLogin.nome;
    entidade.modoProducao = null;
    entidade.formaPlantio = null;
    entidade.cultura = null;
    entidade.receitaAnaliseSoloParametroList = [];
    for (const analiseSoloParametro of this.analiseSoloParametroList) {
      const receitaAnaliseSoloParametro = new ReceitaAnaliseSoloParametro();
      receitaAnaliseSoloParametro.analiseSoloParametro = Object.assign({}, analiseSoloParametro);
      receitaAnaliseSoloParametro.valor = 0;
      let umList = this.getUnidadeMedidaList(receitaAnaliseSoloParametro.analiseSoloParametro.unidadeMedidaLista);
      receitaAnaliseSoloParametro.unidadeMedida = umList.length ? umList[0]: null;
      entidade.receitaAnaliseSoloParametroList.push(receitaAnaliseSoloParametro);
    }
    this.carregar(entidade);
  }

  public referenciaChange(event) {
    let entidade: Receita = this.frm.value;

    this.analiseSoloParametroList = event.value.referenciaBibliograficaAnaliseSoloParametroList.map(a => a.analiseSoloParametro).sort((a, b) => a.ordem - b.ordem);

    entidade.receitaAnaliseSoloParametroList = [];
    for (const analiseSoloParametro of this.analiseSoloParametroList) {
      const receitaAnaliseSoloParametro = new ReceitaAnaliseSoloParametro();
      receitaAnaliseSoloParametro.analiseSoloParametro = Object.assign({}, analiseSoloParametro);
      receitaAnaliseSoloParametro.valor = 0;
      let umList = this.getUnidadeMedidaList(receitaAnaliseSoloParametro.analiseSoloParametro.unidadeMedidaLista);
      receitaAnaliseSoloParametro.unidadeMedida = umList.length ? umList[0]: null;
      entidade.receitaAnaliseSoloParametroList.push(receitaAnaliseSoloParametro);
    }
    this.carregar(entidade);
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

  filtraCulturaTipo(cultura: Cultura, culturaTipo: any[]) {
    return culturaTipo && cultura.culturaTipo.codigo === culturaTipo[0].codigo;
  }

  filtraAduboTipo(adubo: Adubo, aduboTipo: string) {
    return aduboTipo && aduboTipo.length && aduboTipo[0] === adubo.aduboTipo.codigo;
  }

  filtraFonteMateriaOrganica(fonteMateriaOrganica: Adubo, frm: FormGroup) {
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

  filtraFonteCobertura(adubo: Adubo, frm: FormGroup) {
    const lista = (frm[0].get('receitaFonteCoberturaList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].adubo.id === adubo.id) {
        achou = true;
        break;
      }
    }
    return !achou;
  }

  filtraFonteFertirrigacao(adubo: Adubo, frm: FormGroup) {
    const lista = (frm[0].get('receitaFonteFertirrigacaoList') as FormArray);
    if (!lista) {
      return false;
    }
    let achou = false;
    for (let i = 0; i < lista.value.length - 1; i++) {
      if (lista.value[i].adubo.id === adubo.id) {
        achou = true;
        break;
      }
    }
    return !achou;
  }

  inserirFonteMateriaOrganica() {
    const lista = (this.frm.get('receitaFonteMateriaOrganicaList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteMateriaOrganica(new ReceitaFonteAdubo()));
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

  inserirFonteCobertura() {
    const lista = (this.frm.get('receitaFonteCoberturaList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteAdubo(new ReceitaFonteAdubo()));
  }

  inserirFonteFertirrigacao() {
    const lista = (this.frm.get('receitaFonteFertirrigacaoList') as FormArray);
    lista.push(this.serviceForm.criarFormReceitaFonteAdubo(new ReceitaFonteAdubo()));
  }

  excluirFonteMicroNutriente(idx: number) {
    const lista = (this.frm.get('receitaFonteMicroNutrienteList') as FormArray);
    lista.removeAt(idx);
  }

  excluirFonteCobertura(idx: number) {
    const lista = (this.frm.get('receitaFonteCoberturaList') as FormArray);
    lista.removeAt(idx);
  }

  excluirFonteFertirrigacao(idx: number) {
    const lista = (this.frm.get('receitaFonteFertirrigacaoList') as FormArray);
    lista.removeAt(idx);
  }

  getReceitaAnaliseSoloParametro(codigo: string) {
    let result = null;
    if (this.frm && this.frm.value.receitaAnaliseSoloParametroList) {
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
    result: { adubo: Adubo, perc: number }[],
    lista: ReceitaFonteAdubo[]
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

  atualizaPessoaAduboPreco(event, controle: FormControl | AbstractControl) {
    let adubo: Adubo = event.value;
    let result: PessoaAduboPreco = null;

    if (adubo) {
      result = this.getPessoaAduboPreco(adubo);
    }
    if (result) {
      controle.setValue(result.valor);
    }
  }

  private getPessoaAduboPreco(adubo: Adubo) {
    let result: PessoaAduboPreco = null;
    for (let pap of this.pessoaAduboPrecoList) {
      if (pap.adubo.codigo === adubo.codigo) {
        result = pap;
        break;
      }
    }
    return result;
  }

  public realizadaChange(checkbox: MatCheckbox, checked: boolean, controle: FormControl) {
    controle.setValue(checked ? 'S' : 'N');
    checkbox.checked = controle.value === 'S';

  }

  public arrayIntegerTamanho(tamanho): number[] {
    tamanho = !tamanho ? 1 : parseInt(tamanho);
    const result = new Array(tamanho);
    for (let i = 0; i < tamanho; i++) {
      result[i] = i + 1;
    }
    return result;
  }

  public culturaMudou(event, frm) {
    frm.get('modoProducao').setValue(null);
    frm.get('espacamento.quantidade').setValue(null);
    if (event.source._id === 'culturaTipo') {
      frm.get('cultura').setValue(null);
    }
    this.atualizaReferenciaBibliograficaList(frm.get('cultura').value);
  }

  atualizaReferenciaBibliograficaList(cultura: Cultura) {
    this.referenciaBibliograficaList = [];
    if (cultura) {
      cultura.referenciaBibliograficaCulturaList.forEach(r => this.referenciaBibliograficaList.push(r.referenciaBibliografica));
    }
  }

  public exibeParametroSolo(codigo: string) {
    let exibe = this.frm.value.referencia.referenciaBibliograficaAnaliseSoloParametroList.filter(
      rrasp => rrasp.analiseSoloParametro.codigo === codigo).length > 0;
    return exibe;
  }

  public getUnidadeMedidaList(unidadeList: number[]): UnidadeMedida[] {
    let result = new Array<UnidadeMedida>();

    for (let unidadeMedida of this.unidadeMedidaList) {
      for (let n of unidadeList) {
        if (unidadeMedida.id === n) {
          result.push(unidadeMedida);
          break;
        }
      }
    }

    return result;
  }

  public mudouUnidadeMedida(event, registro) {
    console.log('registro', registro);
    console.log('event', event);
  }

}
