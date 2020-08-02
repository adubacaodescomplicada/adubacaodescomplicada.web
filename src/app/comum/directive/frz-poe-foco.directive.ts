import { Directive, ElementRef, AfterContentInit, Input } from '@angular/core';

import { focarNoCampo } from '../../comum/ferramenta/ferramenta-comum';

@Directive({
  selector: '[appFrzPoeFoco]'
})
export class FrzPoeFocoDirective implements AfterContentInit {

  @Input() public appAutoFocus: boolean;

  constructor(
    private eleRef: ElementRef,
  ) {
  }

  public ngAfterContentInit() {
    focarNoCampo(this.eleRef);
  }

}
