import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FrzBarraAcoesComponent } from './frz-barra-acoes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        FrzBarraAcoesComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
    ],
    exports: [
        FrzBarraAcoesComponent,
    ],
    entryComponents: [
        FrzBarraAcoesComponent,
    ],
})
export class FrzBarraAcoesModule {}
