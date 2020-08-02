import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CrudEstado } from '../crud-estado';
import { Servico } from '../_servico';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class FiltroResolver<F, E, L> extends Servico<F, E, L> implements Resolve<any> {

  constructor(
    _router: Router,
    _activatedRoute: ActivatedRoute,
    _mensagem: MensagemService,
  ) {
    super(
      _router,
      _activatedRoute,
      _mensagem,
    );
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.service.estado = CrudEstado.FILTRANDO;

    return new Observable((resolve) => {
      resolve.next(null);
      resolve.complete();
    });
  }

}
