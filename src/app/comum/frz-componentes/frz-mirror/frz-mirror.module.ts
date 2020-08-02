import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrzMirrorComponent } from './frz-mirror.component';

@NgModule({
  declarations: [
    FrzMirrorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FrzMirrorComponent,
  ],
  entryComponents: [
    FrzMirrorComponent,
  ],
})
export class FrzMirrorModule { }
