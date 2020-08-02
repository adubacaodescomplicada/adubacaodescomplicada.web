import { Injectable } from '@angular/core';

import { FiltroEntrarGuard } from '../../_crud/filtro/filtro-entrar.guard';

@Injectable({ providedIn: 'root' })
export class CCrudFiltroEntrarGuard extends FiltroEntrarGuard {

  constructor() {
    super();
   }

}
