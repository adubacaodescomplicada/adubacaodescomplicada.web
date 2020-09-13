import { EntidadeId } from '../entidade-id';
import { CulturaIdadePlantio } from './cultura-idade-plantio';

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
    public metaSaturacaoBase: number;
    public culturaIdadePlantioList: CulturaIdadePlantio[];

}