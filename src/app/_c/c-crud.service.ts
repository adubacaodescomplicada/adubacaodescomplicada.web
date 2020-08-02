import { Injectable } from '@angular/core';

import { CrudService } from '../_crud/crud.service';

@Injectable({ providedIn: 'root' })
export class CCrudService<F, E, L> extends CrudService<F, E, L> {

  constructor(
  ) {
    super();
  }

}
