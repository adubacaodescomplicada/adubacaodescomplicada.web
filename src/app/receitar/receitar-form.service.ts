import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray } from '@angular/forms';
import { distinctUntilChanged, pairwise } from 'rxjs/operators';

import { CrudFormService } from '../_crud/crud-form.service';
import { ReceitaFiltroDTO } from './receita-filtro-dto';
import { Cultura } from './../modelo/entidade/cultura';
import { ReceitaModoAplicacao } from '../modelo/entidade/receita-modo-aplicacao';
import { Espacamento } from '../modelo/entidade/espacamento';
import { ReceitaAmostragemSolo } from '../modelo/entidade/receita-amostragem-solo';
import { AnaliseSoloParametro } from '../modelo/entidade/analise-solo-parametro';
import { Receita } from '../modelo/entidade/receita';
import { ReceitaAnaliseSoloParametro } from '../modelo/entidade/receita-analise-solo-parametro';
import { ReceitaFonteAdubo } from '../modelo/entidade/receita-fonte-adubo';

const faixaArgilaFosforo = [
    [null, 16, [[null, 12, 'baixo'], [12, 18, 'medio'], [18, null, 'adequado']]],
    [16, 35, [[null, 10, 'baixo'], [10, 15, 'medio'], [15, null, 'adequado']]],
    [35, 60, [[null, 5, 'baixo'], [5, 8, 'medio'], [8, null, 'adequado']]],
    [60, null, [[null, 3, 'baixo'], [3, 6, 'medio'], [6, null, 'adequado']]]
];

const faixaArgilaPotassio = [
    [null, 20, [[null, 0.04, 'baixo'], [0.04, 0.1, 'medio'], [0.1, null, 'adequado']]],
    [20, null, [[null, 0.06, 'baixo'], [0.06, 0.2, 'medio'], [0.2, null, 'adequado']]],
];

const faixaBoro = [
    [null, 0.2, 'baixo'],
    [0.2, 0.5, 'medio'],
    [0.5, null, 'adequado']
];

const faixaCobre = [
    [null, 0.4, 'baixo'],
    [0.4, 0.8, 'medio'],
    [0.8, null, 'adequado']
];

const faixaManganes = [
    [null, 1.9, 'baixo'],
    [1.9, 5, 'medio'],
    [5, null, 'adequado']
];

const faixaZinco = [
    [null, 1, 'baixo'],
    [1, 1.6, 'medio'],
    [1.6, null, 'adequado']
];

class NecessidadeAduboFormacao {
    idade: number;
    classificacao: string;
    necessidadeNitrogenio: number;
    necessidadeFosforo: number;
    necessidadePotassio: number;
}

class NecessidadeAduboProducao {
    minimo: number;
    maximo: number;
    classificacao: string;
    necessidadeNitrogenio: number;
    necessidadeFosforo: number;
    necessidadePotassio: number;
}

const necessidadeAduboFormacaoList: NecessidadeAduboFormacao[] = [
    { idade: 0, classificacao: 'baixo', necessidadeNitrogenio: 50, necessidadeFosforo: 10, necessidadePotassio: 10 },
    { idade: 0, classificacao: 'medio', necessidadeNitrogenio: 50, necessidadeFosforo: 10, necessidadePotassio: 10 },
    { idade: 0, classificacao: 'adequado', necessidadeNitrogenio: 50, necessidadeFosforo: 10, necessidadePotassio: 10 },
    { idade: 1, classificacao: 'baixo', necessidadeNitrogenio: 60, necessidadeFosforo: 120, necessidadePotassio: 80 },
    { idade: 1, classificacao: 'medio', necessidadeNitrogenio: 60, necessidadeFosforo: 80, necessidadePotassio: 50 },
    { idade: 1, classificacao: 'adequado', necessidadeNitrogenio: 60, necessidadeFosforo: 40, necessidadePotassio: 30 },
    { idade: 2, classificacao: 'baixo', necessidadeNitrogenio: 120, necessidadeFosforo: 180, necessidadePotassio: 120 },
    { idade: 2, classificacao: 'medio', necessidadeNitrogenio: 120, necessidadeFosforo: 120, necessidadePotassio: 80 },
    { idade: 2, classificacao: 'adequado', necessidadeNitrogenio: 120, necessidadeFosforo: 60, necessidadePotassio: 40 },
    { idade: 3, classificacao: 'baixo', necessidadeNitrogenio: 200, necessidadeFosforo: 240, necessidadePotassio: 160 },
    { idade: 3, classificacao: 'medio', necessidadeNitrogenio: 200, necessidadeFosforo: 160, necessidadePotassio: 110 },
    { idade: 3, classificacao: 'adequado', necessidadeNitrogenio: 200, necessidadeFosforo: 80, necessidadePotassio: 50 },
    { idade: 4, classificacao: 'baixo', necessidadeNitrogenio: 300, necessidadeFosforo: 300, necessidadePotassio: 200 },
    { idade: 4, classificacao: 'medio', necessidadeNitrogenio: 300, necessidadeFosforo: 200, necessidadePotassio: 130 },
    { idade: 4, classificacao: 'adequado', necessidadeNitrogenio: 300, necessidadeFosforo: 100, necessidadePotassio: 70 }
];

const necessidadeAduboProducaoList: NecessidadeAduboProducao[] = [
    {
        minimo: null, maximo: 6, classificacao: 'baixo',
        necessidadeNitrogenio: 35000, necessidadeFosforo: 30000, necessidadePotassio: 60000
    },
    {
        minimo: null, maximo: 6, classificacao: 'medio',
        necessidadeNitrogenio: 35000, necessidadeFosforo: 20000, necessidadePotassio: 40000
    },
    {
        minimo: null, maximo: 6, classificacao: 'adequado',
        necessidadeNitrogenio: 35000, necessidadeFosforo: 0, necessidadePotassio: 30000
    },
    {
        minimo: 6, maximo: 12, classificacao: 'baixo',
        necessidadeNitrogenio: 55000, necessidadeFosforo: 50000, necessidadePotassio: 95000
    },
    {
        minimo: 6, maximo: 12, classificacao: 'medio',
        necessidadeNitrogenio: 55000, necessidadeFosforo: 30000, necessidadePotassio: 60000
    },
    {
        minimo: 6, maximo: 12, classificacao: 'adequado',
        necessidadeNitrogenio: 55000, necessidadeFosforo: 0, necessidadePotassio: 40000
    },
    {
        minimo: 12, maximo: 20, classificacao: 'baixo',
        necessidadeNitrogenio: 100000, necessidadeFosforo: 90000, necessidadePotassio: 150000
    },
    {
        minimo: 12, maximo: 20, classificacao: 'medio',
        necessidadeNitrogenio: 100000, necessidadeFosforo: 60000, necessidadePotassio: 100000
    },
    {
        minimo: 12, maximo: 20, classificacao: 'adequado',
        necessidadeNitrogenio: 100000, necessidadeFosforo: 15000, necessidadePotassio: 70000
    },
    {
        minimo: 20, maximo: 30, classificacao: 'baixo',
        necessidadeNitrogenio: 150000, necessidadeFosforo: 130000, necessidadePotassio: 210000
    },
    {
        minimo: 20, maximo: 30, classificacao: 'medio',
        necessidadeNitrogenio: 150000, necessidadeFosforo: 90000, necessidadePotassio: 140000
    },
    {
        minimo: 20, maximo: 30, classificacao: 'adequado',
        necessidadeNitrogenio: 150000, necessidadeFosforo: 20000, necessidadePotassio: 100000
    },
    {
        minimo: 30, maximo: null, classificacao: 'baixo',
        necessidadeNitrogenio: 200000, necessidadeFosforo: 170000, necessidadePotassio: 270000
    },
    {
        minimo: 30, maximo: null, classificacao: 'medio',
        necessidadeNitrogenio: 200000, necessidadeFosforo: 120000, necessidadePotassio: 180000
    },
    {
        minimo: 30, maximo: null, classificacao: 'adequado',
        necessidadeNitrogenio: 200000, necessidadeFosforo: 25000, necessidadePotassio: 130000
    },
];

@Injectable({ providedIn: 'root' })
export class ReceitarFormService extends CrudFormService<ReceitaFiltroDTO, Receita, Receita> {

    constructor(
    ) {
        super();
    }

    public criarForm(entidade: Receita): FormGroup {
        if (!entidade) {
            return null;
        }
        const result = this.fb.group({
            id: [entidade.id, []],
            data: [entidade.data, [Validators.required]],
            pessoa: [entidade.pessoa, [Validators.required]],
            idadeFaseCultivo: [entidade.idadeFaseCultivo, [Validators.required]], 
            modoProducao: [entidade.modoProducao, [Validators.required]],
            formaPlantio: [entidade.formaPlantio, [Validators.required]],
            cultura: [entidade.cultura, [Validators.required]],
            idadePlantio: [entidade.idadePlantio, []],
            produtividadeEsperada: [entidade.produtividadeEsperada, []],
            referencia: [entidade.referencia, [Validators.required]],
            espacamento: this.criarFormEspacamento(entidade.espacamento),
            receitaAnaliseSoloParametroList: this.criarFormReceitaAnaliseSoloParametroList(entidade.receitaAnaliseSoloParametroList),
            calcario: [entidade.calcario, []],
            calcarioPercentual: [entidade.calcarioPercentual, []],
            calcarioPrecoPorQuilo: [entidade.calcarioPrecoPorQuilo, [Validators.required, Validators.min(0)]],
            necessidadeCalcario: [entidade.necessidadeCalcario, []],
            necessidadeCalcarioCorrigido: [entidade.necessidadeCalcarioCorrigido, []],
            poDeRocha: [entidade.poDeRocha, []],
            poDeRochaPercentual: [entidade.poDeRochaPercentual, [Validators.max(99.99)]],
            poDeRochaPrecoPorQuilo: [entidade.poDeRochaPrecoPorQuilo, [Validators.min(0)]],
            necessidadePoDeRocha: [entidade.necessidadePoDeRocha, []],
            necessidadePoDeRochaCorrigido: [entidade.necessidadePoDeRochaCorrigido, []],
            receitaAmostragemSolo: this.criarFormReceitaAmostragemSolo(entidade.receitaAmostragemSolo),
            necessidadeDeGesso: [entidade.necessidadeDeGesso, []],
            receitaFonteMateriaOrganicaList: this.criarFormReceitaFonteMateriaOrganicaList(entidade.receitaFonteMateriaOrganicaList),
            receitaFonteMateriaOrganicaPercTotal: [entidade.receitaFonteMateriaOrganicaPercTotal, []],

            receitaFonteFosforoList: this.criarFormReceitaFonteAduboList(entidade.receitaFonteFosforoList),
            receitaFonteFosforoPercTotal: [entidade.receitaFonteFosforoPercTotal, []],
            receitaFontePotassioList: this.criarFormReceitaFonteAduboList(entidade.receitaFontePotassioList),
            receitaFontePotassioPercTotal: [entidade.receitaFontePotassioPercTotal, []],
            receitaFonteNitrogenioList: this.criarFormReceitaFonteAduboList(entidade.receitaFonteNitrogenioList),
            receitaFonteNitrogenioPercTotal: [entidade.receitaFonteNitrogenioPercTotal, []],

            receitaFonteMicroNutrienteList: this.criarFormReceitaFonteAduboList(entidade.receitaFonteMicroNutrienteList),
            receitaFonteMicroNutrientePercTotal: [entidade.receitaFonteMicroNutrientePercTotal, []],

            receitaFonteCoberturaList: this.criarFormReceitaFonteAduboList(entidade.receitaFonteCoberturaList),
            receitaFonteCoberturaPercTotal: [entidade.receitaFonteCoberturaPercTotal, []],

            receitaFonteFertirrigacaoList: this.criarFormReceitaFonteAduboList(entidade.receitaFonteFertirrigacaoList),
            receitaFonteFertirrigacaoPercTotal: [entidade.receitaFonteFertirrigacaoPercTotal, []],

            formaIrrigacao: [entidade.formaIrrigacao, []],
            formaAplicacaoAdubo: [entidade.formaAplicacaoAdubo, []],

            necessidadeDeNitrogenio: [, []],
            necessidadeDeFosforo: [, []],
            necessidadeDePotassio: [, []],

            eficienciaDeNitrogenio: [, []],
            eficienciaDeFosforo: [, []],
            eficienciaDePotassio: [, []],

            totalExcessoDeficitNitrogenio: [, []],
            totalExcessoDeficitFosforo: [, []],
            totalExcessoDeficitPotassio: [, []],

            totalExcessoDeficitBoro: [, []],
            totalExcessoDeficitCobre: [, []],
            totalExcessoDeficitManganes: [, []],
            totalExcessoDeficitZinco: [, []],

            necessidadeDeBoro: [entidade.necessidadeDeBoro, []],
            necessidadeDeCobre: [entidade.necessidadeDeCobre, []],
            necessidadeDeManganes: [entidade.necessidadeDeManganes, []],
            necessidadeDeZinco: [entidade.necessidadeDeZinco, []],

            receitaModoAplicacao: this.criarFormReceitaModoAplicacao(entidade.receitaModoAplicacao),

        });

        /*
        result.get('modoProducao').setValue('F');
        result.get('cultura').setValue({
            armazanamentoEnvio: 'e',
            codigo: 'ABACATE',
            culturaIdadePlantioList: [{
                id: 4,
                nome: 'primeiro ano',
                quantidade: 1,
                unidade: 'anos'
            }, {
                id: 5,
                nome: 'segundo ano',
                quantidade: 2,
                unidade: 'anos'
            }, {
                id: 6,
                nome: 'terceiro ano',
                quantidade: 3,
                unidade: 'anos'
            }, {
                id: 7,
                nome: 'quarto ano',
                quantidade: 4,
                unidade: 'anos'
            }],
            epoca: 'b',
            formacao: 'S',
            id: 1,
            metaSaturacaoBase: 70,
            nome: 'Abacate',
            numeroFolha: 'd',
            observacaoColeta: 'f',
            producao: 'S',
            recomendacao: 'a',
            tipoFolha: 'c',
            espacamentoQuantidade: 3,
        });
        result.get('idadePlantio').setValue({
            id: 7,
            nome: 'quarto ano',
            quantidade: 4,
            unidade: 'anos'
        });
        */

        result.get('receitaModoAplicacao').valueChanges.subscribe((c: ReceitaModoAplicacao) => {
            let value = c.quantidadePorMes && c.totalMeses ? c.quantidadePorMes * c.totalMeses : 0;
            result.get('receitaModoAplicacao.totalSafra')?.setValue(value, { emitEvent: false });
        });

        this.calculaForm(result, result.value);

        result.valueChanges.subscribe((receita: Receita) => {
            this.calculaForm(result, receita);
        });

        return result;
    }
    public criarFormReceitaAmostragemSolo(receitaAmostragemSolo: ReceitaAmostragemSolo) {
        const result = this.fb.group({
            realizada: [receitaAmostragemSolo?.realizada, []],
            gesso: [receitaAmostragemSolo?.gesso, []],
            precoPorQuilo: [receitaAmostragemSolo?.precoPorQuilo, [Validators.min(0)]],
            calcio: [receitaAmostragemSolo?.calcio, []],
            aluminio: [receitaAmostragemSolo?.aluminio, []],
            satAluminio: [receitaAmostragemSolo?.satAluminio, []]
        });

        return result;
    }

    public criarFormReceitaModoAplicacao(entidade: ReceitaModoAplicacao) {
        const result = this.fb.group({
            quantidadePorMes: [entidade?.quantidadePorMes, [Validators.required, Validators.min(0)]],
            totalMeses: [entidade?.totalMeses, [Validators.required, Validators.min(0)]],
            totalSafra: [entidade?.totalSafra, [Validators.min(1)]],
        });

        return result;
    }

    public criarFormEspacamento(espacamento: Espacamento) {
        const result = this.fb.group({
            quantidade: [espacamento?.quantidade, [Validators.required]],
            a: [espacamento?.a, [Validators.required, Validators.min(0.01)]],
            b: [espacamento?.b, [Validators.required, Validators.min(0.01)]],
            c: [espacamento?.c, [Validators.required, Validators.min(0.01)]],
            quantidadePlanta: [espacamento?.quantidadePlanta, [Validators.required, Validators.min(0.01)]],
            area: [espacamento?.area, [Validators.required, Validators.min(0.01)]],
        });

        // atualizar os calculos
        if (result.value.quantidadePlanta > 0) {
            result.get('area').setValue(this.espacamentoCalcArea(result.value), { emitEvent: false });
        } else if (result.value.area > 0) {
            result.get('quantidadePlanta').setValue(this.espacamentoCalcQuantidadePlanta(result.value), { emitEvent: false });
        }

        result.get('quantidade').valueChanges.subscribe((v: number) => {
            // verificar se tem elementos para o c??lculo
            const temp = result.value;
            temp.quantidade = v;
            if (temp.quantidadePlanta > 0) {
                result.get('area').setValue(this.espacamentoCalcArea(temp), { emitEvent: false });
            } else if (temp.area > 0) {
                result.get('quantidadePlanta').setValue(this.espacamentoCalcQuantidadePlanta(temp), { emitEvent: false });
            }
            // console.log('quantidade modificado');
        });

        result.get('a').valueChanges.subscribe((v: number) => {
            // verificar se tem elementos para o c??lculo
            const temp = result.value;
            temp.a = v;
            if (temp.quantidadePlanta > 0) {
                result.get('area').setValue(this.espacamentoCalcArea(temp), { emitEvent: false });
            } else if (temp.area > 0) {
                result.get('quantidadePlanta').setValue(this.espacamentoCalcQuantidadePlanta(temp), { emitEvent: false });
            }
            // console.log('a modificado');
        });

        result.get('b').valueChanges.subscribe((v: number) => {
            // verificar se tem elementos para o c??lculo
            const temp = result.value;
            temp.b = v;
            if (temp.quantidadePlanta > 0) {
                result.get('area').setValue(this.espacamentoCalcArea(temp), { emitEvent: false });
            } else if (temp.area > 0) {
                result.get('quantidadePlanta').setValue(this.espacamentoCalcQuantidadePlanta(temp), { emitEvent: false });
            }
            // console.log('b modificado');
        });

        result.get('c').valueChanges.subscribe((v: number) => {
            // verificar se tem elementos para o c??lculo
            const temp = result.value;
            temp.c = v;
            if (temp.quantidadePlanta > 0) {
                result.get('area').setValue(this.espacamentoCalcArea(temp), { emitEvent: false });
            } else if (temp.area > 0) {
                result.get('quantidadePlanta').setValue(this.espacamentoCalcQuantidadePlanta(temp), { emitEvent: false });
            }
            // console.log('c modificado');
        });

        result.get('quantidadePlanta').valueChanges.subscribe((v: number) => {
            // verificar se tem elementos para o c??lculo
            const temp = result.value;
            temp.quantidadePlanta = v;
            result.get('area').setValue(this.espacamentoCalcArea(temp), { emitEvent: false });
            // console.log('quantidadePlanta modificado');
        });

        result.get('area').valueChanges.subscribe((v: number) => {
            // verificar se tem elementos para o c??lculo
            const temp = result.value;
            temp.area = v;
            result.get('quantidadePlanta').setValue(this.espacamentoCalcQuantidadePlanta(temp), { emitEvent: false });
            // console.log('area modificado');
        });

        return result;
    }

    private espacamentoCalcArea(espacamento: Espacamento) {
        let result = espacamento?.area;
        if (espacamento?.quantidadePlanta > 0 &&
            espacamento?.a > 0 &&
            espacamento?.b > 0 &&
            (!espacamento?.quantidade || espacamento?.quantidade && espacamento?.c > 0)) {
            if (!espacamento.quantidade) {
                result = espacamento.quantidadePlanta / (10000 / (espacamento.a * espacamento.b));
                // console.log('simples area', result);
            } else {
                result = espacamento.quantidadePlanta / (10000 / ((espacamento.a * (espacamento.b + espacamento.c) / 2)));
                // console.log('quantidade area', result);
            }
        }
        return result;
    }

    private espacamentoCalcQuantidadePlanta(espacamento: Espacamento) {
        let result = espacamento?.quantidadePlanta;
        if (espacamento?.area > 0 &&
            espacamento?.a > 0 &&
            espacamento?.b > 0 &&
            (!espacamento?.quantidade || espacamento?.quantidade && espacamento?.c > 0)) {
            if (!espacamento.quantidade) {
                result = espacamento.area * (10000 / (espacamento.a * espacamento.b));
                // console.log('simples quantidadePlanta', result);
            } else {
                result = espacamento.area * (10000 / ((espacamento.a * ((espacamento.c + espacamento.b) / 2))));
                // console.log('quantidade quantidadePlanta', result);
            }
        }
        return result;
    }

    public criarFormReceitaAnaliseSoloParametroList(lista: ReceitaAnaliseSoloParametro[]): FormArray {
        if (!lista) {
            lista = [];
        }
        const listaCtrl = [];
        for (const ent of lista) {
            listaCtrl.push(this.criarFormReceitaAnaliseSoloParametro(ent));
        }
        const result = this.fb.array(listaCtrl, [Validators.required]);

        result.valueChanges.subscribe((r) => {
            let calculo = new Array<ReceitaAnaliseSoloParametro>();
            for (let l1 of r) {
                calculo.push(Object.assign({}, l1));
            }
            calculo = this.calculaAnaliseSoloParametro(calculo);
            for (let l1 = 0; l1 < r.length; l1 ++) {
                for (let l2 of calculo) {
                    if (r[l1].analiseSoloParametro.codigo === l2.analiseSoloParametro.codigo &&
                        r[l1].valor !== l2.valor) {
                        result.controls[l1]['controls'].valor.setValue(l2.valor, { emitEvent: false });
                        break;
                    }
                }
            }
        });
        return result;
    }

    private calculaAnaliseSoloParametro(pla: ReceitaAnaliseSoloParametro[]): ReceitaAnaliseSoloParametro[] {
        // calculo prioritario
        pla.forEach(e => {
            if (e?.analiseSoloParametro?.temFormulaQualidadeSolo === 'S') {
                switch (e?.analiseSoloParametro?.codigo) {
                    case 'ctc':
                        e.valor =
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'calcio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'magnesio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'potassio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'sodio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'h_al');
                        break;
                }
            }
        });

        // calculo dependente
        pla.forEach(e => {
            if (e?.analiseSoloParametro?.temFormulaQualidadeSolo === 'S') {
                switch (e?.analiseSoloParametro?.codigo) {
                    case 'carbono':
                        e.valor = this.pegaValorReceitaAnaliseSoloParametro(pla, 'mat_organica') / 1.72;
                        break;
                    case 'ctc_ph7':
                        e.valor = this.pegaValorReceitaAnaliseSoloParametro(pla, 'calcio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'magnesio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'potassio') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'h_al');
                        break;
                    case 'sat_base':
                        e.valor = this.pegaValorReceitaAnaliseSoloParametro(pla, 'ctc') === 0 ? 0 :
                            100 *
                            (this.pegaValorReceitaAnaliseSoloParametro(pla, 'calcio') +
                                this.pegaValorReceitaAnaliseSoloParametro(pla, 'magnesio') +
                                this.pegaValorReceitaAnaliseSoloParametro(pla, 'potassio'))
                            /
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'ctc');
                        break;
                    case 'silte':
                        e.valor = 100 - (this.pegaValorReceitaAnaliseSoloParametro(pla, 'argila') +
                            this.pegaValorReceitaAnaliseSoloParametro(pla, 'areia'));
                        break;
                    case 'soma_bases':
                        e.valor = this.pegaValorReceitaAnaliseSoloParametro(pla, 'magnesio')
                            + this.pegaValorReceitaAnaliseSoloParametro(pla, 'calcio')
                            + this.pegaValorReceitaAnaliseSoloParametro(pla, 'potassio');
                        break;
                }
            }
        });
        return pla;
    }

    private pegaValorReceitaAnaliseSoloParametro(pla: ReceitaAnaliseSoloParametro[], codigo: string) {
        for (let r of pla) {
            if (r.analiseSoloParametro.codigo === codigo) {
                return r.valor || 0;
            }
        }
        return 0;
    }

    public criarFormReceitaFonteMateriaOrganicaList(lista: ReceitaFonteAdubo[]): FormArray {
        if (!lista) {
            lista = [];
            lista.push(new ReceitaFonteAdubo());
        }
        const listaCtrl = [];
        for (const ent of lista) {
            listaCtrl.push(this.criarFormReceitaFonteMateriaOrganica(ent));
        }
        const result = this.fb.array(listaCtrl, [Validators.required]);

        return result;
    }

    public criarFormReceitaFonteMateriaOrganica(entidade: ReceitaFonteAdubo): FormGroup {
        if (!entidade) {
            return null;
        }
        const result = this.fb.group({
            id: [entidade.id, []],
            adubo: [entidade.adubo, [Validators.required]],
            valor: [entidade.valor ? entidade.valor : 0, [Validators.required, Validators.min(0)]],
            precoPorQuilo: [entidade.precoPorQuilo, [Validators.min(0)]],
        });

        result.get('valor').valueChanges.subscribe(value => {
            result.get('valor').setValue(value, { onlySelf: true, emitEvent: false, emitModelToViewChange: true });
        }, error => { }, () => { });

        return result;
    }
    public criarFormReceitaFonteAduboList(lista: ReceitaFonteAdubo[]): FormArray {
        if (!lista) {
            lista = [];
            lista.push(new ReceitaFonteAdubo());
        }
        const listaCtrl = [];
        for (const ent of lista) {
            listaCtrl.push(this.criarFormReceitaFonteAdubo(ent));
        }
        const result = this.fb.array(listaCtrl, [Validators.required]);

        return result;
    }

    public criarFormReceitaFonteAdubo(entidade: ReceitaFonteAdubo): FormGroup {
        if (!entidade) {
            return null;
        }
        const result = this.fb.group({
            id: [entidade.id, []],
            adubo: [entidade.adubo, [Validators.required]],
            valor: [entidade.valor ? entidade.valor : 0, [Validators.required, Validators.min(0)]],
            precoPorQuilo: [entidade.precoPorQuilo, [Validators.min(0)]],
            totalFosforo: [, []],
            totalPotassio: [, []],
            totalNitrogenio: [, []],

            totalBoro: [, []],
            totalCobre: [, []],
            totalManganes: [, []],
            totalZinco: [, []],

        });

        result.get('valor').valueChanges.subscribe(value => {
            result.get('valor').setValue(value, { onlySelf: true, emitEvent: false, emitModelToViewChange: true });
        }, error => { }, () => { });

        result.valueChanges.subscribe(value => {
            let totalFosforo = null;
            let totalPotassio = null;
            let totalNitrogenio = null;

            let totalBoro = null;
            let totalCobre = null;
            let totalManganes = null;
            let totalZinco = null;
            if (value.adubo?.aduboGarantiaList?.length) {
                totalFosforo = 0;
                totalPotassio = 0;
                totalNitrogenio = 0;

                totalBoro = 0;
                totalCobre = 0;
                totalManganes = 0;
                totalZinco = 0;
                for (const aduboGarantia of value.adubo?.aduboGarantiaList) {
                    totalFosforo += aduboGarantia.garantia.codigo === 'P2O5' ? aduboGarantia.valor : 0;
                    totalPotassio += aduboGarantia.garantia.codigo === 'K2O' ? aduboGarantia.valor : 0;
                    totalNitrogenio += aduboGarantia.garantia.codigo === 'N' ? aduboGarantia.valor : 0;

                    totalBoro += aduboGarantia.garantia.codigo === 'B' ? aduboGarantia.valor : 0;
                    totalCobre += aduboGarantia.garantia.codigo === 'Cu' ? aduboGarantia.valor : 0;
                    totalManganes += aduboGarantia.garantia.codigo === 'Mn' ? aduboGarantia.valor : 0;
                    totalZinco += aduboGarantia.garantia.codigo === 'Zn' ? aduboGarantia.valor : 0;
                }
            }
            result.get('totalFosforo').setValue(totalFosforo, { emitEvent: false });
            result.get('totalPotassio').setValue(totalPotassio, { emitEvent: false });
            result.get('totalNitrogenio').setValue(totalNitrogenio, { emitEvent: false });

            result.get('totalBoro').setValue(totalBoro, { emitEvent: false });
            result.get('totalCobre').setValue(totalCobre, { emitEvent: false });
            result.get('totalManganes').setValue(totalManganes, { emitEvent: false });
            result.get('totalZinco').setValue(totalZinco, { emitEvent: false });
        });

        return result;
    }

    public criarFormReceitaAnaliseSoloParametro(entidade: ReceitaAnaliseSoloParametro): FormGroup {
        if (!entidade) {
            return null;
        }
        const result = this.fb.group({
            id: [entidade.id, []],
            analiseSoloParametro: [entidade.analiseSoloParametro, [Validators.required]],
            valor: [entidade.valor, [Validators.required, Validators.min(0)]],
            avaliacao: [null, []],
            unidadeMedida: [entidade.unidadeMedida, []],
        });
        // if (entidade?.analiseSoloParametro?.unidadeMedida?.codigo === 'PERCENTUAL') {
        //     result.get('valor').setValidators([Validators.required, Validators.min(0), Validators.max(100)]);
        // }
        return result;
    }

    private calculaForm(ctrl: FormGroup, receita: Receita) {
        this.receitaAnaliseSoloParametroCalcAvaliacao(ctrl, receita);
        this.necessidadeCalagemTHaCalc(ctrl, receita);
        this.necessidadeGessoAgricolaQGCalc(ctrl, receita);
        this.somaReceitaFonteMateriaOrganicaPercTotal(ctrl, receita);
        this.somaReceitaFonteFosforoPercTotal(ctrl, receita);
        this.somaReceitaFontePotassioPercTotal(ctrl, receita);
        this.somaReceitaFonteNitrogenioPercTotal(ctrl, receita);
        this.somaReceitaFonteMicroNutrientePercTotal(ctrl, receita);
        this.somaReceitaFonteCoberturaPercTotal(ctrl, receita);
        this.somaReceitaFonteFertirrigacaoPercTotal(ctrl, receita);
        this.necessidadeAdubo(ctrl, receita);
    }

    private somaReceitaFonteMateriaOrganicaPercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFonteMateriaOrganicaList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFonteMateriaOrganicaPercTotal').setValue(result, { emitEvent: false });
    }

    private somaReceitaFonteFosforoPercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFonteFosforoList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFonteFosforoPercTotal').setValue(result, { emitEvent: false });
    }

    private somaReceitaFontePotassioPercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFontePotassioList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFontePotassioPercTotal').setValue(result, { emitEvent: false });
    }

    private somaReceitaFonteNitrogenioPercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFonteNitrogenioList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFonteNitrogenioPercTotal').setValue(result, { emitEvent: false });
    }

    private somaReceitaFonteMicroNutrientePercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFonteMicroNutrienteList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFonteMicroNutrientePercTotal').setValue(result, { emitEvent: false });
    }

    private somaReceitaFonteCoberturaPercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFonteCoberturaList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFonteCoberturaPercTotal').setValue(result, { emitEvent: false });
    }

    private somaReceitaFonteFertirrigacaoPercTotal(ctrl: FormGroup, receita: Receita) {
        const result = receita.receitaFonteFertirrigacaoList?.map(r => r.valor).reduce((a, b) => a + b);
        ctrl.get('receitaFonteFertirrigacaoPercTotal').setValue(result, { emitEvent: false });
    }

    private necessidadeAdubo(ctrl: FormGroup, receita: Receita) {
        let necessidadeDeNitrogenioTemp = null;
        let necessidadeDeFosforoTemp = null;
        let necessidadeDePotassioTemp = null;
        if (receita.modoProducao === 'F') {
            if (receita.idadePlantio) {
                const fosforo = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'fosforo_melich');
                const potassio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'potassio');
                for (const necessidade of necessidadeAduboFormacaoList) {
                    if (necessidade.idade === receita.idadePlantio.quantidade) {
                        necessidadeDeNitrogenioTemp = necessidade.necessidadeNitrogenio;
                        if (necessidade.classificacao === fosforo?.get('avaliacao').value) {
                            necessidadeDeFosforoTemp = necessidade.necessidadeFosforo;
                        }
                        if (necessidade.classificacao === potassio?.get('avaliacao').value) {
                            necessidadeDePotassioTemp = necessidade.necessidadePotassio;
                        }
                    }
                }
            }
        } else if (receita.modoProducao === 'P') {
            if (receita.produtividadeEsperada > 0) {
                const fosforo = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'fosforo_melich');
                const potassio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'potassio');
                for (const necessidade of necessidadeAduboProducaoList) {
                    if ((necessidade.minimo ? receita.produtividadeEsperada >= necessidade.minimo : true) &&
                        (necessidade.maximo ? receita.produtividadeEsperada < necessidade.maximo : true)) {
                        necessidadeDeNitrogenioTemp = necessidade.necessidadeNitrogenio;
                        if (necessidade.classificacao === fosforo?.get('avaliacao').value) {
                            necessidadeDeFosforoTemp = necessidade.necessidadeFosforo;
                        }
                        if (necessidade.classificacao === potassio?.get('avaliacao').value) {
                            necessidadeDePotassioTemp = necessidade.necessidadePotassio;
                        }
                    }
                }
            }
        }
        ctrl.get('necessidadeDeNitrogenio').setValue(necessidadeDeNitrogenioTemp, { emitEvent: false });
        ctrl.get('necessidadeDeFosforo').setValue(necessidadeDeFosforoTemp, { emitEvent: false });
        ctrl.get('necessidadeDePotassio').setValue(necessidadeDePotassioTemp, { emitEvent: false });

        let eficienciaDeNitrogenioTemp = null;
        let eficienciaDeFosforoTemp = null;
        let eficienciaDePotassioTemp = null;
        const numeroPlantasHectare = receita.modoProducao === 'F' ?
            1 :
            receita.espacamento.quantidadePlanta / receita.espacamento.area;

        if (receita.formaAplicacaoAdubo && numeroPlantasHectare) {
            if (necessidadeDeNitrogenioTemp) {
                eficienciaDeNitrogenioTemp = (necessidadeDeNitrogenioTemp / numeroPlantasHectare) /
                    receita.formaAplicacaoAdubo.eficienciaNitrogenio;
            }
            if (necessidadeDeFosforoTemp) {
                eficienciaDeFosforoTemp = (necessidadeDeFosforoTemp / numeroPlantasHectare) /
                    receita.formaAplicacaoAdubo.eficienciaFosforo;
            }
            if (necessidadeDePotassioTemp) {
                eficienciaDePotassioTemp = (necessidadeDePotassioTemp / numeroPlantasHectare) /
                    receita.formaAplicacaoAdubo.eficienciaPotassio;
            }
        }
        ctrl.get('eficienciaDeNitrogenio').setValue(eficienciaDeNitrogenioTemp, { emitEvent: false });
        ctrl.get('eficienciaDeFosforo').setValue(eficienciaDeFosforoTemp, { emitEvent: false });
        ctrl.get('eficienciaDePotassio').setValue(eficienciaDePotassioTemp, { emitEvent: false });


        // identificar os nutrientes dos adubos informados
        let totalExcessoDeficitNitrogenio = 0;
        let totalExcessoDeficitFosforo = 0;
        let totalExcessoDeficitPotassio = 0;

        let totalExcessoDeficitBoro = 0;
        let totalExcessoDeficitCobre = 0;
        let totalExcessoDeficitManganes = 0;
        let totalExcessoDeficitZinco = 0;
        for (const item of receita.receitaFonteNitrogenioList) {
            totalExcessoDeficitNitrogenio += item['totalNitrogenio'] * (item.valor / 100);
            totalExcessoDeficitFosforo += item['totalFosforo'] * (item.valor / 100);
            totalExcessoDeficitPotassio += item['totalPotassio'] * (item.valor / 100);

            totalExcessoDeficitBoro += item['totalBoro'] * (item.valor / 100);
            totalExcessoDeficitCobre += item['totalCobre'] * (item.valor / 100);
            totalExcessoDeficitManganes += item['totalManganes'] * (item.valor / 100);
            totalExcessoDeficitZinco += item['totalZinco'] * (item.valor / 100);
        }
        for (const item of receita.receitaFonteFosforoList) {
            totalExcessoDeficitNitrogenio += item['totalNitrogenio'] * (item.valor / 100);
            totalExcessoDeficitFosforo += item['totalFosforo'] * (item.valor / 100);
            totalExcessoDeficitPotassio += item['totalPotassio'] * (item.valor / 100);

            totalExcessoDeficitBoro += item['totalBoro'] * (item.valor / 100);
            totalExcessoDeficitCobre += item['totalCobre'] * (item.valor / 100);
            totalExcessoDeficitManganes += item['totalManganes'] * (item.valor / 100);
            totalExcessoDeficitZinco += item['totalZinco'] * (item.valor / 100);
        }
        for (const item of receita.receitaFontePotassioList) {
            totalExcessoDeficitNitrogenio += item['totalNitrogenio'] * (item.valor / 100);
            totalExcessoDeficitFosforo += item['totalFosforo'] * (item.valor / 100);
            totalExcessoDeficitPotassio += item['totalPotassio'] * (item.valor / 100);

            totalExcessoDeficitBoro += item['totalBoro'] * (item.valor / 100);
            totalExcessoDeficitCobre += item['totalCobre'] * (item.valor / 100);
            totalExcessoDeficitManganes += item['totalManganes'] * (item.valor / 100);
            totalExcessoDeficitZinco += item['totalZinco'] * (item.valor / 100);
        }
        for (const item of receita.receitaFonteMicroNutrienteList) {
            totalExcessoDeficitNitrogenio += item['totalNitrogenio'] * (item.valor / 100);
            totalExcessoDeficitFosforo += item['totalFosforo'] * (item.valor / 100);
            totalExcessoDeficitPotassio += item['totalPotassio'] * (item.valor / 100);

            totalExcessoDeficitBoro += item['totalBoro'] * (item.valor / 100);
            totalExcessoDeficitCobre += item['totalCobre'] * (item.valor / 100);
            totalExcessoDeficitManganes += item['totalManganes'] * (item.valor / 100);
            totalExcessoDeficitZinco += item['totalZinco'] * (item.valor / 100);
        }
        for (const item of receita.receitaFonteCoberturaList) {
            totalExcessoDeficitNitrogenio += item['totalNitrogenio'] * (item.valor / 100);
            totalExcessoDeficitFosforo += item['totalFosforo'] * (item.valor / 100);
            totalExcessoDeficitPotassio += item['totalPotassio'] * (item.valor / 100);

            totalExcessoDeficitBoro += item['totalBoro'] * (item.valor / 100);
            totalExcessoDeficitCobre += item['totalCobre'] * (item.valor / 100);
            totalExcessoDeficitManganes += item['totalManganes'] * (item.valor / 100);
            totalExcessoDeficitZinco += item['totalZinco'] * (item.valor / 100);
        }
        for (const item of receita.receitaFonteFertirrigacaoList) {
            totalExcessoDeficitNitrogenio += item['totalNitrogenio'] * (item.valor / 100);
            totalExcessoDeficitFosforo += item['totalFosforo'] * (item.valor / 100);
            totalExcessoDeficitPotassio += item['totalPotassio'] * (item.valor / 100);

            totalExcessoDeficitBoro += item['totalBoro'] * (item.valor / 100);
            totalExcessoDeficitCobre += item['totalCobre'] * (item.valor / 100);
            totalExcessoDeficitManganes += item['totalManganes'] * (item.valor / 100);
            totalExcessoDeficitZinco += item['totalZinco'] * (item.valor / 100);
        }

        ctrl.get('totalExcessoDeficitNitrogenio').setValue(totalExcessoDeficitNitrogenio, { emitEvent: false });
        ctrl.get('totalExcessoDeficitFosforo').setValue(totalExcessoDeficitFosforo, { emitEvent: false });
        ctrl.get('totalExcessoDeficitPotassio').setValue(totalExcessoDeficitPotassio, { emitEvent: false });

        ctrl.get('totalExcessoDeficitBoro').setValue(totalExcessoDeficitBoro, { emitEvent: false });
        ctrl.get('totalExcessoDeficitCobre').setValue(totalExcessoDeficitCobre, { emitEvent: false });
        ctrl.get('totalExcessoDeficitManganes').setValue(totalExcessoDeficitManganes, { emitEvent: false });
        ctrl.get('totalExcessoDeficitZinco').setValue(totalExcessoDeficitZinco, { emitEvent: false });

        let necessidadeDeBoroTemp = 0;
        let necessidadeDeCobreTemp = 0;
        let necessidadeDeManganesTemp = 0;
        let necessidadeDeZincoTemp = 0;

        if (this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl) {
            if (this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'boro')?.get('avaliacao')?.value === 'baixo') {
                necessidadeDeBoroTemp = 2;
            }
            if (this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'cobre')?.get('avaliacao')?.value === 'baixo') {
                necessidadeDeCobreTemp = 2;
            }
            if (this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'manganes')?.get('avaliacao')?.value === 'baixo') {
                necessidadeDeManganesTemp = 6;
            }
            if (this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'zinco')?.get('avaliacao')?.value === 'baixo') {
                necessidadeDeZincoTemp = 6;
            }
            ctrl.get('necessidadeDeBoro')?.setValue(necessidadeDeBoroTemp, { emitEvent: false });
            ctrl.get('necessidadeDeCobre')?.setValue(necessidadeDeCobreTemp, { emitEvent: false });
            ctrl.get('necessidadeDeManganes')?.setValue(necessidadeDeManganesTemp, { emitEvent: false });
            ctrl.get('necessidadeDeZinco')?.setValue(necessidadeDeZincoTemp, { emitEvent: false });
        }
    }

    private necessidadeCalagemTHaCalc(ctrl: FormGroup, receita: Receita) {

        const idadePlantio = receita?.idadePlantio?.quantidade; // p39
        const satBase = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'sat_base')?.value.valor; // p24
        const ctc = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'ctc')?.value.valor; // p25
        const satBaseCultura = receita?.cultura?.metaSaturacaoBase; // v46

        let necessidadeCalcario = null;
        let necessidadeCalcarioCorrigido = null;

        let necessidadePoDeRocha = null;
        let necessidadePoDeRochaCorrigido = null;

        const calcario = receita.calcario;
        if (calcario && idadePlantio && satBase && ctc && satBaseCultura) {
            // V49	PRNT (BUSCAR EM TABELA NO MYSQL)
            const prnt: number = calcario.aduboGarantiaList?.find(a => a.garantia?.codigo?.toLowerCase() === 'prnt')?.valor;

            if (prnt) {
                necessidadeCalcario = ((satBaseCultura - satBase) * ctc) / prnt;
                necessidadeCalcario = necessidadeCalcario < 0 ? 0 : necessidadeCalcario;
                necessidadeCalcarioCorrigido = necessidadeCalcario * (receita.calcarioPercentual / 100);
                // console.log('calcario', necessidadeCalcario, necessidadeCalcarioCorrigido);
            }
        }

        const poDeRocha = receita.poDeRocha;
        if (poDeRocha && calcario) {
            // V50	CaO + MgO (BUSCAR EM TABELA NO MYSQL)
            const caoMgO: any = calcario.aduboGarantiaList?.find(a => a.garantia?.codigo?.toLowerCase()
                === 'caoMgO'.toLowerCase())?.valor;
            // Z46	CaO+MgO+K20 (BUSCAR EM TABELA NO MYSQL)
            const caoMgOK20: any = poDeRocha.aduboGarantiaList?.find(a => a.garantia?.codigo?.toLowerCase()
                === 'caoMgOK20'.toLowerCase())?.valor;

            necessidadePoDeRocha = (caoMgO / caoMgOK20) * necessidadeCalcario;
            necessidadePoDeRocha = necessidadePoDeRocha < 0 ? 0 : necessidadePoDeRocha;
            necessidadePoDeRochaCorrigido = necessidadePoDeRocha * receita.poDeRochaPercentual;
            // console.log('poDeRocha', necessidadePoDeRocha, necessidadePoDeRochaCorrigido);
        }

        ctrl.get('necessidadeCalcario')
            .setValue(necessidadeCalcario, { emitEvent: false });
        ctrl.get('necessidadeCalcarioCorrigido')
            .setValue(necessidadeCalcarioCorrigido, { emitEvent: false });
        ctrl.get('necessidadePoDeRocha')
            .setValue(necessidadePoDeRocha, { emitEvent: false });
        ctrl.get('necessidadePoDeRochaCorrigido')
            .setValue(necessidadePoDeRochaCorrigido, { emitEvent: false });
    }

    private necessidadeGessoAgricolaQGCalc(ctrl: FormGroup, receita: Receita) {
        let necessidadeDeGesso = null;
        if (receita.receitaAmostragemSolo.realizada === true) {
            if ((receita.receitaAmostragemSolo.calcio <= 0.5) ||
                (receita.receitaAmostragemSolo.aluminio > 0.5) ||
                (receita.receitaAmostragemSolo.satAluminio > 0.2)) {
                necessidadeDeGesso = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'argila')?.value.valor * 7.5;
            }
        }
        ctrl.get('necessidadeDeGesso')
            .setValue(necessidadeDeGesso,
                { emitEvent: false });
    }

    private receitaAnaliseSoloParametroCalcAvaliacao(ctrl: FormGroup, receita: Receita) {

        const argila = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'argila');
        const fosforo = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'fosforo_melich');
        const potassio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'potassio');
        const boro = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'boro');
        const cobre = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'cobre');
        const manganes = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'manganes');
        const zinco = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'zinco');
        const magnesio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'magnesio');
        const calcio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'calcio');

        // calc f??sforo solo
        fosforo && fosforo.get('avaliacao').setValue(this.avaliaFaixa(
            [argila.value.valor, fosforo.value.valor], faixaArgilaFosforo), { emitEvent: false });
        potassio && potassio.get('avaliacao').setValue(this.avaliaFaixa(
            [argila.value.valor, potassio.value.valor], faixaArgilaPotassio), { emitEvent: false });
        boro && boro.get('avaliacao').setValue(this.avaliaFaixa(
            [boro.value.valor], faixaBoro), { emitEvent: false });
        cobre && cobre.get('avaliacao').setValue(this.avaliaFaixa(
            [cobre.value.valor], faixaCobre), { emitEvent: false });
        manganes && manganes.get('avaliacao').setValue(this.avaliaFaixa(
            [manganes.value.valor], faixaManganes), { emitEvent: false });
        zinco && zinco.get('avaliacao').setValue(this.avaliaFaixa(
            [zinco.value.valor], faixaZinco), { emitEvent: false });
    }

    private receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl: FormGroup, codigo: string): FormGroup {
        for (const c of (ctrl.get('receitaAnaliseSoloParametroList') as FormArray).controls) {
            if ((c.get('analiseSoloParametro').value.codigo) === (codigo)) {
                return c as FormGroup;
            }
        }
    }

    private avaliaFaixa(valor: number[], faixaList: any[]) {
        if (!valor?.length || valor.filter(v => !v || v <= 0).length > 0) {
            return null;
        }
        for (const faixa of faixaList) {
            if ((faixa[0] ? valor[0] > faixa[0] : true) &&
                (faixa[1] ? valor[0] <= faixa[1] : true)) {
                if (typeof faixa[2] === 'string') {
                    return faixa[2];
                } else {
                    valor.shift();
                    return this.avaliaFaixa(valor, faixa[2]);
                }
            }
        }
        return null;
    }

}


