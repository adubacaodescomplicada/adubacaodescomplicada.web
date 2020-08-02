import { Injectable } from '@angular/core';

import { CrudFormService } from '../_crud/crud-form.service';

@Injectable({ providedIn: 'root' })
export class CCrudFormService<F, E, L> extends CrudFormService<F, E, L> {

    constructor(
    ) {
        super();
    }

}
