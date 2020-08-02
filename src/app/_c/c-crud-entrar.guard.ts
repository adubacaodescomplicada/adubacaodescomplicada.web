import { Injectable } from '@angular/core';

import { CrudEntrarGuard } from '../_crud/crud-entrar.guard';

@Injectable({ providedIn: 'root' })
export class CCrudEntrarGuard extends CrudEntrarGuard {

  constructor() {
    super();
  }

}
