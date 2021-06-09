import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PessoaAduboPreco } from '../modelo/entidade/pessoa-adubo-preco';

@Injectable({ providedIn: 'root' })
export class PessoaAduboPrecoFormService {


    constructor(
        private _fb: FormBuilder
    ) {
    }

    public criarLista(lista: PessoaAduboPreco[]) {
        if (!lista) {
            lista = [];
        }
        const listaCtrl = [];
        for (const ent of lista) {
            listaCtrl.push(this.criarForm(ent));
        }
        const result = this._fb.array(listaCtrl, [Validators.required]);

        return this._fb.group({items: result});
    }

    public criarForm(entidade: PessoaAduboPreco) {
        if (!entidade) {
            return null;
        }
        const result = this._fb.group({
            id: [entidade.id, []],
            pessoa: [entidade.pessoa, [Validators.required]],
            adubo: [entidade.adubo, [Validators.required]],
            unidadeMedida: [entidade.unidadeMedida, [Validators.required]],
            data: [entidade.data, [Validators.required]],
            valor: [entidade.valor, [Validators.required]],
        });

        return result;
    }

}
