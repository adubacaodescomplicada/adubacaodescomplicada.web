import { Injectable, Injector, Type } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { InjetorEstaticoService } from '../comum/servico/injetor-estatico.service';

@Injectable({ providedIn: 'root' })
export class CrudFormService <F, E, L> {

    private _fb: FormBuilder;

    constructor(
    ) {
        const injector: Injector = InjetorEstaticoService.injector;
        this._fb = injector.get<FormBuilder>(FormBuilder as Type<FormBuilder>);
    }

    protected get fb(): FormBuilder {
        return this._fb;
    }

    public criarForm(entidade: E): FormGroup {
        if (!entidade) {
            entidade = {} as E;
        }
        const result = this.fb.group({
            valor: ['', [Validators.required]],
        });
        return result;
    }

    public criarFiltro(filtro: F): FormGroup {
        if (!filtro) {
            filtro = {} as F;
        }
        const result = this.fb.group({});
        return result;
    }

    public criarLista(lista: E[] | L[]): FormArray {
        if (!lista) {
            lista = [] as E[] | L[];
        }
        const result = this.fb.array([]);
        return result;
    }

}
