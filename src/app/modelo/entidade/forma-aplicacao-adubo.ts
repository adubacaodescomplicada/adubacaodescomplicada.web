import { EntidadeId } from '../entidade-id';

export class FormaAplicacaoAdubo implements EntidadeId {

    public id: number;
    public nome: string;
    public eficienciaNitrogenio: number;
    public eficienciaFosforo: number;
    public eficienciaPotassio: number;

}
