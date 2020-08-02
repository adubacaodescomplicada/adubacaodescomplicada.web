import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ListComponent } from './list.component';

@Injectable({ providedIn: 'root' })
export class ListSairGuard<E, F, L> implements CanDeactivate<ListComponent<E, F, L>> {

  constructor() { }
  
  canDeactivate(
    component: ListComponent<E, F, L>,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean |
    import('@angular/router').UrlTree |
    import('rxjs').Observable<boolean |
    import('@angular/router').UrlTree> | Promise<boolean |
      import('@angular/router').UrlTree> {
    console.log('LIST sair');
    return true;
  }

}
