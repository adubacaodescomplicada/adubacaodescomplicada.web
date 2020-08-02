import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FrzBotaoSubirComponent } from './frz-botao-subir.component';

@NgModule({
    declarations: [
        FrzBotaoSubirComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        FrzBotaoSubirComponent,
    ],
    entryComponents: [
        FrzBotaoSubirComponent,
    ],
})
export class FrzBotaoSubirModule { }
