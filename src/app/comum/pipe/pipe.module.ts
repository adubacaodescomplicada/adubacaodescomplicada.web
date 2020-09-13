import { NgModule } from '@angular/core';
import { CallbackPipe } from './callback.pipe';
import { JsonFormatPipe } from './json-format.pipe';
import { OrdemPipe } from './ordem.pipe';

@NgModule({
  declarations: [
    CallbackPipe,
    JsonFormatPipe,
    OrdemPipe,
  ],
  exports: [
    CallbackPipe,
    JsonFormatPipe,
    OrdemPipe,
  ],
})
export class PipeModule { }
