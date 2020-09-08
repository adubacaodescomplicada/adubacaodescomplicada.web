import { ReceitaAnaliseSoloParametro } from './receita.analise.solo.parametro';
import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, Form, FormControl } from '@angular/forms';

import { CrudFormService } from '../_crud/crud-form.service';
import { Receita } from './receita';
import { ReceitaFiltroDTO } from './receita-filtro-dto';
import { Subject, Observable } from 'rxjs';

const faixaArgilaFosforo = [
    [null, 15, [[null, 12, 'baixo'], [12, 18, 'medio'], [18, null, 'adequado']]],
    [16, 35, [[null, 10, 'baixo'], [10, 15, 'medio'], [15, null, 'adequado']]],
    [35, 60, [[null, 5, 'baixo'], [5, 8, 'medio'], [8, null, 'adequado']]],
    [60, null, [[null, 3, 'baixo'], [3, 6, 'medio'], [6, null, 'adequado']]]
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
            receitaAnaliseSoloParametroList: this.criarFormReceitaAnaliseSoloParametroList(entidade.receitaAnaliseSoloParametroList)
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
            valor: [entidade.valor, [Validators.required]],
            avaliacao: [null, []],
        });

        return result;
    }

    private calculaForm(ctrl: FormGroup, receita: Receita) {
        this.receitaAnaliseSoloParametroCalcAvaliacao(ctrl, receita);
    }

    private receitaAnaliseSoloParametroCalcAvaliacao(ctrl: FormGroup, receita: Receita) {

        // calc potassio
        const calcio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'calcio');
        const magnesio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'magnesio');
        const potassio = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'potassio');
        const fosforo = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'fosforo');
        const argila = this.receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl, 'argila');

        calcio.get('avaliacao').setValue(null, { emitEvent: false });
        magnesio.get('avaliacao').setValue(null, { emitEvent: false });
        potassio.get('avaliacao').setValue(null, { emitEvent: false });
        fosforo.get('avaliacao').setValue(null, { emitEvent: false });
        argila.get('avaliacao').setValue(null, { emitEvent: false });

        if (argila.value.valor && fosforo.value.valor) {
            let achou = false;
            for (const faixaArgila of faixaArgilaFosforo) {
                if ((faixaArgila[0] ? argila.value.valor >= faixaArgila[0] : true) &&
                    (faixaArgila[1] ? argila.value.valor <= faixaArgila[1] : true)) {
                    for (const faixaFosforo of faixaArgila[2] as []) {
                        if ((faixaFosforo[0] ? fosforo.value.valor >= faixaFosforo[0] : true) &&
                            (faixaFosforo[1] ? fosforo.value.valor <= faixaFosforo[1] : true)) {
                            argila.get('avaliacao').setValue(faixaFosforo[2], { emitEvent: false });
                            fosforo.get('avaliacao').setValue(faixaFosforo[2], { emitEvent: false });
                            achou = true;
                            break;
                        }
                    }
                }
                if (achou) {
                    break;
                }
            }
        }

        // if (calcio?.valor && magnesio?.valor && potassio?.valor && fosforo?.valor && argila?.valor) {
        // }
    }

    private receitaAnaliseSoloParametroCalcAvaliacaoGetControl(ctrl: FormGroup, codigo: string): FormGroup {
        for (const r of (ctrl.get('receitaAnaliseSoloParametroList') as FormArray).controls) {
            if (r.get('analiseSoloParametro').value.codigo === codigo) {
                return r as FormGroup;
            }
        }
    }

}


