import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { FiltroComponent } from './filtro.component';

@Injectable({ providedIn: 'root' })
export class FiltroSairGuard<E, F, L> implements CanDeactivate<FiltroComponent<E, F, L>> {

  constructor() { }
  canDeactivate(
    component: FiltroComponent<E, F, L>,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean |
    import('@angular/router').UrlTree |
    import('rxjs').Observable<boolean |
    import('@angular/router').UrlTree> | Promise<boolean |
      import('@angular/router').UrlTree> {
    console.log('FILTRO sair');
    return true;
  }

}
