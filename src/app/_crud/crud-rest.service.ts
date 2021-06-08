import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';

import { InjetorEstaticoService } from '../comum/servico/injetor-estatico.service';
import { LoginService } from '../seguranca/login/login.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CrudRestService<F, E, L> {

    protected funcionalidade = 'entidade';
    private _http: HttpClient;
    private _loginService: LoginService;

    constructor(
    ) {
        const injector: Injector = InjetorEstaticoService.injector;
        this._http = injector.get<HttpClient>(HttpClient as Type<HttpClient>);
        this._loginService = injector.get<LoginService>(LoginService as Type<LoginService>);
    }

    protected get http(): HttpClient {
        return this._http;
    }

    protected get loginService(): LoginService {
        return this._loginService;
    }

    public create(entidade: E): Observable<number> {
        entidade['id'] = null;
        return this._http.post<number>(
            `${environment.REST_API_URL}/${this.funcionalidade}`,
            entidade,
            { headers: this.loginService.apiRequestHttpHeader }
        );
    }

    public restore(id: number): Observable<E> {
        return this._http.get<E>(
            `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
            { headers: this.loginService.apiRequestHttpHeader }
        );
    }

    public update(id: number, entidade: E): Observable<void> {
        return this._http.put<void>(
            `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
            entidade,
            { headers: this.loginService.apiRequestHttpHeader }
        );
    }

    public delete(id: number): Observable<void> {
        return this._http.delete<void>(
            `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
            { headers: this.loginService.apiRequestHttpHeader }
        );
    }

    public prepararForm(modelo: E): Observable<E> {
        return new Observable<E>((resolve) => {
            resolve.next(modelo);
            resolve.complete();
          });
        // return this._http.post<E>(
        //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-form`,
        //     modelo,
        //     { headers: this.loginService.apiRequestHttpHeader }
        // );
    }

    public prepararFiltro(modelo: F): Observable<F> {
        return new Observable<F>((resolve) => {
            resolve.next(modelo);
            resolve.complete();
          });
        // return this._http.post<F>(
        //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-filtro`,
        //     modelo,
        //     { headers: this.loginService.apiRequestHttpHeader }
        // );
    }

    public filtrar(filtro: F): Observable<E[] | L[]> {
        // captar parametros do filtro
        let param = '';
        if (filtro) {
            param = Object.keys(filtro).filter(key => filtro[key])
                .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(filtro[key]))
                .join('&');
            if (param) {
                param = '?' + param;
            }
        }
        if (this.funcionalidade) {
            return this._http.get<E[] | L[]>(
                `${environment.REST_API_URL}/${this.funcionalidade}${param}`,
                { headers: this.loginService.apiRequestHttpHeader }
            );
        }
    }

}
