import { Injectable } from '@angular/core';

import { FiltroSairGuard } from '../../_crud/filtro/filtro-sair.guard';

@Injectable({ providedIn: 'root' })
export class CCrudFiltroSairGuard<E, F, L> extends FiltroSairGuard<E, F, L> {

  constructor() {
    super();
   }

}
