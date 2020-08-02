import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AutorizarTrocarSenha } from '../../modelo/autorizar-trocar-senha';

@Injectable({ providedIn: 'root' })
export class AutorizarTrocarSenhaFormService {

  constructor(
    private _formBuilder: FormBuilder,
  ) {
  }

  public criarFormulario(entidade: AutorizarTrocarSenha) {
    if (!entidade) {
      entidade = new AutorizarTrocarSenha();
    }

    const result = this._formBuilder.group(
      {
        email: [entidade.email, [Validators.required, Validators.email]],
        token: [entidade.token, [Validators.required]],
      }
    );

    return result;
  }

}
