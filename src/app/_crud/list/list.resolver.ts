import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CrudEstado } from '../crud-estado';
import { Servico } from '../_servico';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';

@Injectable({ providedIn: 'root' })
export class ListResolver<F, E, L>  extends Servico<F, E, L> implements Resolve<any> {

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
    let selecao = [];
    if (state.root.queryParams && state.root.queryParams.sel) {
      selecao = state.root.queryParams.sel.split(',');
    }
    this.service.estado = CrudEstado.LISTANDO;

    const result = [];
    result.push({ id: 1, nome: 'Joao', codigo: 'Cd1', descricao: 'X' });
    result.push({ id: 2, nome: 'Maria', codigo: 'Cd2', descricao: 'P' });
    result.push({ id: 3, nome: 'Paulo', codigo: 'Cd3', descricao: 'T' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd3', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd2', descricao: 'O' });
    result.push({ id: 4, nome: 'André', codigo: 'Cd4', descricao: 'O' });

    // return [this.serviceRest.filtrar()];
    return [new Observable((resolve) => {
      resolve.next(result);
      resolve.complete();
    }), new Observable((resolve) => {
      resolve.next(selecao);
      resolve.complete();
    })];
  }

}
