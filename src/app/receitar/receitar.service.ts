import { UnidadeMedida } from './../modelo/entidade/unidade-medida';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from './../seguranca/login/login.service';
import { Nutriente } from './../modelo/entidade/nutriente';
import { Cultura } from './../modelo/entidade/cutura';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReceitarService {

    constructor(
        private _http: HttpClient,
        private loginService: LoginService
    ) {
    }

    public culturaList(): Observable<Cultura[]> {
        return this._http.get<Cultura[]>(`${environment.REST_API_URL}/cultura`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public nutrienteList(): Observable<Nutriente[]> {
        return this._http.get<Nutriente[]>(`${environment.REST_API_URL}/nutriente`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

    public unidadeMedidaList(): Observable<UnidadeMedida[]> {
        return this._http.get<UnidadeMedida[]>(`${environment.REST_API_URL}/unidade-medida`,
            { headers: this.loginService.apiRequestHttpHeader });
    }

}
