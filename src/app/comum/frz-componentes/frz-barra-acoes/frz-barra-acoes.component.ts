import { Component, OnInit, Input } from '@angular/core';

import { FrzBotao } from './frz-botao';
import { asBoolean } from '../../ferramenta/ferramenta-comum';

@Component({
    selector: 'app-frz-barra-acoes',
    templateUrl: './frz-barra-acoes.component.html',
    styleUrls: ['./frz-barra-acoes.component.scss'],
})
export class FrzBarraAcoesComponent implements OnInit {

    @Input('mini')
    private _mini = true;

    @Input('botaoList')
    private _botaoList: FrzBotao[];

    @Input('fixoNoTopo')
    private _fixoNoTopo = false;

    @Input('exibeSombra')
    private _exibeSombra = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public get mini(): boolean {
        return asBoolean(this._mini);
    }

    public set mini(valor: boolean) {
        this._mini = asBoolean(valor);
    }

    public get botaoList(): FrzBotao[] {
        return this._botaoList;
    }

    public set botaoList(valor: FrzBotao[]) {
        this._botaoList = valor;
    }

    public get fixoNoTopo(): boolean {
        return asBoolean(this._fixoNoTopo);
    }

    public set fixoNoTopo(valor: boolean) {
        this._fixoNoTopo = asBoolean(valor);
    }

    public get exibeSombra(): boolean {
        return asBoolean(this._exibeSombra);
    }

    public set exibeSombra(valor: boolean) {
        this._exibeSombra = asBoolean(valor);
    }

    defineClasses() {
        const result = `d-flex justify-content-end flex-wrap ${this.exibeSombra ? 'shadow-lg' : ''} ${this.fixoNoTopo ? 'sticky-top' : ''}`;
        return result;
    }

}
