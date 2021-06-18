import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeModule } from './comum/pipe/pipe.module';
import { ServicoModule } from './comum/servico/servico.module';
import { HttpConfigInterceptor } from './comum/servico/interceptor/httpconfig.interceptor';
import { MenuModule } from './menu/menu.module';
import { RodapeModule } from './rodape/rodape.module';
import { MensagemModule } from './comum/servico/mensagem/mensagem.module';
import { AuthGuardService } from './comum/servico/auth-guard/auth-guard';
import { CrudFormResolver } from './_crud/crud.resolver';
import { AuthGuardAdminService } from './comum/servico/auth-guard/auth-guard.admin';
import { LayoutModule } from './layout/layout.module';
import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
import { FrzComponentesModule } from './comum/frz-componentes/frz-componentes.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    SegurancaRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MenuModule,
    RodapeModule,
    ServicoModule,
    PipeModule,
    MensagemModule,
    FrzComponentesModule,
    LayoutModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  exports: [
  ],
  providers: [
    AuthGuardService,
    AuthGuardAdminService,
    CrudFormResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor, multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: onAppInit,
    //   multi: true,
    //   deps: []
    // },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

// codigo pós inicializacao - serve pra buscar código da api, se necessário
// export function onAppInit() {
//   return () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('In initApp');
//         resolve(new CrudService());
//       }, 3000);
//     });
//   };
// }
