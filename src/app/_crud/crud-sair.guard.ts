import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CrudComponent } from './crud.component';

@Injectable({ providedIn: 'root' })
export class CrudSairGuard<E, F, L> implements CanDeactivate<CrudComponent<E, F, L>> {

  constructor() { }

  canDeactivate(
    component: CrudComponent<E, F, L>,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean |
    import('@angular/router').UrlTree |
    import('rxjs').Observable<boolean |
    import('@angular/router').UrlTree> | Promise<boolean |
      import('@angular/router').UrlTree> {
    console.log('CRUD sair');
    return true;
  }

}
