import { Injectable } from '@angular/core';


import { CrudFormResolver } from '../_crud/crud.resolver';

@Injectable({ providedIn: 'root' })
export class CCrudFormResolver extends CrudFormResolver {

  constructor(
  ) {
    super();
  }

}
