import { MensagemService } from './../comum/servico/mensagem/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';

import { CrudService } from './crud.service';
import { CrudFormService } from './crud-form.service';
import { CrudRestService } from './crud-rest.service';
import { Injector, Type } from '@angular/core';
import { InjetorEstaticoService } from '../comum/servico/injetor-estatico.service';

export class Servico<F, E, L> {

    private _service: CrudService<F, E, L>;
    private _serviceForm: CrudFormService<F, E, L>;
    private _serviceRest: CrudRestService<F, E, L>;

    constructor(
        // private _service: CrudService<F, E, L>,
        // private _serviceForm: CrudFormService<F, E, L>,
        // private _serviceRest: CrudRestService<F, E, L>,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _mensagem: MensagemService,
    ) {
        const injector: Injector = InjetorEstaticoService.injector;
        this._service = injector.get<CrudService<F, E, L>>(CrudService as Type<CrudService<F, E, L>>);
        this._serviceForm = injector.get<CrudFormService<F, E, L>>(CrudFormService as Type<CrudFormService<F, E, L>>);
        this._serviceRest = injector.get<CrudRestService<F, E, L>>(CrudRestService as Type<CrudRestService<F, E, L>>);
    }

    public get service(): CrudService<F, E, L> {
        return this._service;
    }

    protected get serviceForm(): CrudFormService<F, E, L> {
        return this._serviceForm;
    }

    protected get serviceRest(): CrudRestService<F, E, L> {
        return this._serviceRest;
    }

    protected get router(): Router {
        return this._router;
    }

    protected get activatedRoute(): ActivatedRoute {
        return this._activatedRoute;
    }

    protected get mensagem(): MensagemService {
        return this._mensagem;
    }

}
