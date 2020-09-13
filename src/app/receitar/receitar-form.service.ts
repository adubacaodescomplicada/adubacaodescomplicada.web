import { ReceitaAnaliseSoloParametro } from './receita.analise.solo.parametro';
import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray } from '@angular/forms';

import { CrudFormService } from '../_crud/crud-form.service';
import { Receita } from './receita';
import { ReceitaFiltroDTO } from './receita-filtro-dto';

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
            culturaTipo: [entidade.culturaTipo, [Validators.required]],
            cultura: [entidade.cultura, [Validators.required]],
            idadePlantio: [entidade.idadePlantio, []],
            receitaAnaliseSoloParametroList: this.criarFormReceitaAnaliseSoloParametroList(entidade.receitaAnaliseSoloParametroList)
        });

        result.get('culturaTipo').setValue('F');
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
            tipoFolha: 'c'
        });
        result.get('idadePlantio').setValue({
            id: 7,
            nome: 'quarto ano',
            quantidade: 4,
            unidade: 'anos'
        });

        this.calculaForm(result, result.value);

        result.valueChanges.subscribe((receita: Receita) => {
            this.calculaForm(result, receita);
        });

        return result;
    }

    public criarFormReceitaAnaliseSoloParametroList(lista: ReceitaAnaliseSoloParametro[]): FormArray {
        if (!lista) {
            return null;
        }
        const listaCtrl = [];
        for (const ent of lista) {
            listaCtrl.push(this.criarFormReceitaAnaliseSoloParametro(ent));
        }
        const result = this.fb.array(listaCtrl, [Validators.required]);

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
        });
        if (entidade?.analiseSoloParametro?.unidadeMedida?.codigo === 'PERCENTUAL') {
            result.get('valor').setValidators([Validators.required, Validators.min(0), Validators.max(100)]);
        }

        return result;
    }

    private calculaForm(ctrl: FormGroup, receita: Receita) {
        this.receitaAnaliseSoloParametroCalcAvaliacao(ctrl, receita);
    }

    private receitaAnaliseSoloParametroCalcAvaliacao(ctrl: FormGroup, receita: Receita) {

        const argila = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'argila');
        const fosforo = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'fosforo');
        const potassio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'potassio');
        const boro = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'boro');
        const cobre = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'cobre');
        const manganes = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'manganes');
        const zinco = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'zinco');
        const calcio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'calcio');
        const magnesio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'magnesio');

        // calc fósforo solo
        fosforo.get('avaliacao').setValue(this.avaliaFaixa(
            [argila.value.valor, fosforo.value.valor], faixaArgilaFosforo), { emitEvent: false });
        potassio.get('avaliacao').setValue(this.avaliaFaixa(
            [argila.value.valor, potassio.value.valor], faixaArgilaPotassio), { emitEvent: false });
        boro.get('avaliacao').setValue(this.avaliaFaixa(
            [boro.value.valor], faixaBoro), { emitEvent: false });
        cobre.get('avaliacao').setValue(this.avaliaFaixa(
            [cobre.value.valor], faixaCobre), { emitEvent: false });
        manganes.get('avaliacao').setValue(this.avaliaFaixa(
            [manganes.value.valor], faixaManganes), { emitEvent: false });
        zinco.get('avaliacao').setValue(this.avaliaFaixa(
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
            if ((faixa[0] ? valor[0] >= faixa[0] : true) &&
                (faixa[1] ? valor[0] < faixa[1] : true)) {
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


