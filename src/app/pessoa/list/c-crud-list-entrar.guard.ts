import { Injectable } from '@angular/core';

import { ListEntrarGuard } from '../../_crud/list/list-entrar.guard';

@Injectable({ providedIn: 'root' })
export class CCrudListEntrarGuard extends ListEntrarGuard {

  constructor() {
    super();
  }

}
