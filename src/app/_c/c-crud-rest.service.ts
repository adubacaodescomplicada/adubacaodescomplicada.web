import { Injectable } from '@angular/core';

import { CrudRestService } from '../_crud/crud-rest.service';

@Injectable({ providedIn: 'root' })
export class CCrudRestService<F, E, L> extends CrudRestService<F, E, L> {

    constructor(
    ) {
        super();
    }

}
