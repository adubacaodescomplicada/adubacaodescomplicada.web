import { FrzPoeFocoDirective } from './frz-poe-foco.directive';
import { NgModule } from '@angular/core';

import { FrzVoltarBotaoDirective } from './frz-voltar-botao.directive';

@NgModule({
  declarations: [
    FrzVoltarBotaoDirective,
    FrzPoeFocoDirective,
  ],
  exports: [
    FrzVoltarBotaoDirective,
    FrzPoeFocoDirective,
  ],
})
export class FrzDirectivesModule { }
