import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ReceitarService } from './receitar.service';

@Injectable({ providedIn: 'root' })
export class ReceitarResolver implements Resolve<any> {

  constructor(
    private service: ReceitarService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      principal: null,
      apoio: {
        culturaList: this.service.culturaList(),
        analiseSoloParametroList: this.service.analiseSoloParametroList(),
        unidadeMedidaList: this.service.unidadeMedidaList(),
        fonteMateriaOrganicaList: this.service.fonteMateriaOrganicaList(),
        aduboList: this.service.aduboList(),
        garantiaList: this.service.garantiaList(),
        receitaReferenciaList: this.service.receitaReferenciaList(),
      }
    };
  }

}
