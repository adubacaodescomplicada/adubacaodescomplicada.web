import { EntidadeId } from '../entidade-id';

export class AnaliseSoloParametro implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public sigla: string;
    public temFormulaQualidadeSolo: string;
    public ordem: number;
    public observacao: string;
    public unidadeMedidaLista: number[];
}
