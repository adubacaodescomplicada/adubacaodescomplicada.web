import { Injectable } from '@angular/core';
import { AduboPreco } from '../modelo/entidade/adubo-preco';
import { ConverteQuiloService } from './converte-quilo/converte-quilo.service';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(
    private _converteQuiloService: ConverteQuiloService,
  ) { }

  public converteQuilo(valor: AduboPreco) {
     return this._converteQuiloService.converte(valor);
  }
}
