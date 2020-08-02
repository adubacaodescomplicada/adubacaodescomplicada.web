import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpEventType
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { FrzMirrorComponent } from './../../frz-componentes/frz-mirror/frz-mirror.component';
import { DomService } from '../dom.service';

@Injectable({ providedIn: 'root' })
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private _domService: DomService,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // criar um componente mirror no body
        let mirror = this._domService.appendComponentToBody(FrzMirrorComponent);
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                // desligar o mirror
                if (event.type === HttpEventType.Response) {
                    mirror = this._domService.destroyComponentToBody(mirror);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // desligar o mirror
                mirror = this._domService.destroyComponentToBody(mirror);
                return throwError(error);
            }));
    }
}
