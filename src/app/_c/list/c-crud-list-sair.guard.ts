import { Injectable } from '@angular/core';

import { ListSairGuard } from '../../_crud/list/list-sair.guard';

@Injectable({ providedIn: 'root' })
export class CCrudListSairGuard<E, F, L> extends ListSairGuard<E, F, L> {

  constructor() {
    super();
  }

}
