import { RouterModule } from '@angular/router';
import { RodapeModule } from './../../rodape/rodape.module';
import { MenuModule } from './../../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComMenuComponent } from './layout-com-menu.component';

@NgModule({
    declarations: [
        LayoutComMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MenuModule,
        RodapeModule,
    ],
    exports: [
        LayoutComMenuComponent
    ],
    entryComponents: [
        LayoutComMenuComponent
    ]
})
export class LayoutComMenuModule { }
