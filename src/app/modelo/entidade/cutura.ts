import { EntidadeId } from '../entidade-id';

export class Cultura implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public formacao: string;
    public producao: string;
    public recomendacao: string;
    public epoca: string;
    public tipoFolha: string;
    public numeroFolha: string;
    public armazanamentoEnvio: string;
    public observacaoColeta: string;

}
