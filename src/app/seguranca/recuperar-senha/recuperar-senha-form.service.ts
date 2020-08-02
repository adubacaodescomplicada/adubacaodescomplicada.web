import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { RecuperarSenha } from '../../modelo/recuperar-senha';

@Injectable({ providedIn: 'root' })
export class RecuperarSenhaFormService {

  constructor(
    private _formBuilder: FormBuilder,
  ) {
  }

  public criarFormulario(entidade: RecuperarSenha) {
    if (!entidade) {
      entidade = new RecuperarSenha();
    }

    const result = this._formBuilder.group(
      {
        email: [entidade.email, [Validators.required, Validators.email]],
      }
    );

    return result;
  }

}
