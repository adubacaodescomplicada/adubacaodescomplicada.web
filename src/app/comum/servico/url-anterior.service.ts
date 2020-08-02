import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlAnteriorService {

  private _urlAnterior: string = undefined;
  private _urlAtual: string = undefined;

  constructor(private router: Router) {
    this._urlAtual = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url !== this._urlAtual) {
        this._urlAnterior = this._urlAtual;
        this._urlAtual = event.url;
      }
    });
  }

  public get urlAtual() {
    return this._urlAtual;
  }

  public get urlAnterior() {
    return this._urlAnterior;
  }

}
