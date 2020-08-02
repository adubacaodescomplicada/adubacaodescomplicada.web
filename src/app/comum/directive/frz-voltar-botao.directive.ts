import { Directive, HostListener, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { UrlAnteriorService } from './../servico/url-anterior.service';

@Directive({
  selector: '[appFrzVoltarBotao]'
})
export class FrzVoltarBotaoDirective {

  constructor(
    private location: Location,
    private eleRef: ElementRef,
    private router: Router,
    private urlAnteriorService: UrlAnteriorService,
  ) {
    // this.eleRef.nativeElement.style.background = 'red';
  }

  @HostListener('click')
  onClick() {
    // console.log(this.urlAnteriorService.urlAtual);
    // console.log(this.urlAnteriorService.urlAnterior);
    if (!this.urlAnteriorService.urlAnterior) {
      this.router.navigate(['/']);
    } else {
      this.location.back();
    }
  }

}
