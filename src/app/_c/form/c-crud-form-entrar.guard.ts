import { Injectable } from '@angular/core';

import { FormEntrarGuard } from '../../_crud/form/form-entrar.guard';

@Injectable({ providedIn: 'root' })
export class CCrudFormEntrarGuard extends FormEntrarGuard {

  constructor() {
    super();
  }

}
