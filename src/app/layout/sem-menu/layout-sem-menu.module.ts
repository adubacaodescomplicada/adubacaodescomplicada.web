import { RouterModule } from '@angular/router';
import { RodapeModule } from './../../rodape/rodape.module';
import { MenuModule } from './../../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutSemMenuComponent } from './layout-sem-menu.component';

@NgModule({
    declarations: [
        LayoutSemMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MenuModule,
        RodapeModule,
    ],
    exports: [
        LayoutSemMenuComponent
    ],
    entryComponents: [
        LayoutSemMenuComponent
    ]})
export class LayoutSemMenuModule {}
