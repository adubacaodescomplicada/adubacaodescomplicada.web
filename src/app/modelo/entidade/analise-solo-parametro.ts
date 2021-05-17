import { UnidadeMedida } from './unidade-medida';
import { EntidadeId } from '../entidade-id';

export class AnaliseSoloParametro implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public sigla: string;
    public unidadeMedida: UnidadeMedida;
    public temFormulaQualidadeSolo: string;
    public ordem: number;
    public observacao: string;
}
