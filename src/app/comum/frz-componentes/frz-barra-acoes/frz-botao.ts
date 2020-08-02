import { codificaNome } from '../../ferramenta/ferramenta-comum';

export class FrzBotao {

    private _codigo: string;

    constructor(
        private _nome: string,
        private _descricao: string,
        private _icon: string,
        private _cor: string,
        private _visivel: boolean,
        private _desabilitado: boolean,
        private _acao: (evento, botao: FrzBotao) => void,
        private _grupo: boolean = false,
        private _subBotaoList: FrzBotao[] = []
    ) {
        this._codigo = codificaNome(this.nome);
        if (!this._codigo) {
            throw new Error(`Nome de botão inválido (${this.nome})`);
        }
        if (!this.subBotaoList) {
            this.subBotaoList = [];
        }
    }

    public get codigo() {
        return this._codigo;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(valor: string) {
        this._nome = valor;
    }

    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(valor: string) {
        this._descricao = valor;
    }

    public get icon(): string {
        return this._icon;
    }
    public set icon(valor: string) {
        this._icon = valor;
    }

    public get cor(): string {
        return this._cor;
    }
    public set cor(valor: string) {
        this._cor = valor;
    }

    public get visivel(): boolean {
        return this._visivel;
    }
    public set visivel(valor: boolean) {
        this._visivel = valor;
    }

    public get desabilitado(): boolean {
        return this._desabilitado;
    }
    public set desabilitado(valor: boolean) {
        this._desabilitado = valor;
    }

    public get acao(): (evento, botao: FrzBotao) => void {
        return this._acao;
    }
    public set acao(valor: (evento, botao: FrzBotao) => void) {
        this._acao = valor;
    }

    public get grupo(): boolean {
        return this._grupo;
    }
    public set grupo(valor: boolean) {
        this._grupo = valor;
    }

    public get subBotaoList(): FrzBotao[] {
        return this._subBotaoList;
    }
    public set subBotaoList(valor: FrzBotao[]) {
        this._subBotaoList = valor;
    }

}
