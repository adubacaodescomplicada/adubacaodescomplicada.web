import { Garantia } from './../modelo/entidade/garantia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudService } from './../_crud/crud.service';
import { environment } from './../../environments/environment';
import { Receita } from './receita';
import { ReceitaFiltroDTO } from './receita-filtro-dto';
import { LoginService } from './../seguranca/login/login.service';
import { AnaliseSoloParametro } from './../modelo/entidade/analise-solo-parametro';
import { Adubo } from './../modelo/entidade/adubo';
import { Cultura } from '../modelo/entidade/cultura';
import { UnidadeMedida } from './../modelo/entidade/unidade-medida';
import { FonteMateriaOrganica } from '../modelo/entidade/fonte-materia-organica';

@Injectable({ providedIn: 'root' })
export class ReceitarService extends CrudService<ReceitaFiltroDTO, Receita, Receita> {

    constructor(
        private _http: HttpClient,
        private loginService: LoginService
    ) {
        super();
    }

    public aduboList(): Observable<Adubo[]> {
        return this._http.get<Adubo[]>(`${environment.REST_API_URL}/adubo`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public culturaList(): Observable<Cultura[]> {
        return this._http.get<Cultura[]>(`${environment.REST_API_URL}/cultura`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public analiseSoloParametroList(): Observable<AnaliseSoloParametro[]> {
        return this._http.get<AnaliseSoloParametro[]>(`${environment.REST_API_URL}/analise-solo-parametro`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public unidadeMedidaList(): Observable<UnidadeMedida[]> {
        return this._http.get<UnidadeMedida[]>(`${environment.REST_API_URL}/unidade-medida`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public fonteMateriaOrganicaList(): Observable<FonteMateriaOrganica[]> {
        return this._http.get<FonteMateriaOrganica[]>(`${environment.REST_API_URL}/fonte-materia-organica`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public garantiaList(): Observable<Garantia[]> {
        return this._http.get<Garantia[]>(`${environment.REST_API_URL}/garantia`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

}
