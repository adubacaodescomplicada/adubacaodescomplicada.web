import { EntidadeId } from '../entidade-id';

export class FormaAplicacaoAdubo implements EntidadeId {

    public id: number;
    public nome: string;
    public fatorEficienciaN: number;
    public fatorEficienciaP205: number;
    public fatorEficienciaK20: number;

}
