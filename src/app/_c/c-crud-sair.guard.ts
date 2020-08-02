import { Injectable } from '@angular/core';

import { CrudSairGuard } from '../_crud/crud-sair.guard';

@Injectable({ providedIn: 'root' })
export class CCrudSairGuard<E, F, L> extends CrudSairGuard<E, F, L> {

  constructor() {
    super();
  }

}
