import { NgModule } from '@angular/core';

import { LayoutSemMenuModule } from './sem-menu/layout-sem-menu.module';
import { LayoutComMenuModule } from './com-menu/layout-com-menu.module';

@NgModule({
    exports: [
        LayoutComMenuModule,
        LayoutSemMenuModule,
    ]
})
export class LayoutModule { }
