import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ReceitarFormService  {

    constructor(
        private _fb: FormBuilder
    ) {
    }

    public criarFrm(entidade): FormGroup {
        if (!entidade) {
            return null;
        }
        const result = this._fb.group({
            data: [entidade.data, [Validators.required]],
            pessoa: [entidade.pessoa, [Validators.required]],
            tipo: [entidade.tipo, [Validators.required]],
            cultura: [entidade.cultura, [Validators.required]],
        });
        return result;
    }

}
