import { EntidadeId } from '../entidade-id';
import { CulturaIdadePlantio } from './cultura-idade-plantio';
import { CulturaNecessidadeAduboFormacao } from './cultura-necessidade-adubo-formacao';
import { CulturaNecessidadeAduboProducao } from './cultura-necessidade-adubo-producao';

export class Cultura implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public classificacao: string;
    public formacao: string;
    public producao: string;
    public cultivoEmSolo: string;
    public cultivoForaSolo: string;
    public cultivoHidroponico: string;
    public recomendacao: string;
    public epoca: string;
    public tipoFolha: string;
    public numeroFolha: string;
    public armazanamentoEnvio: string;
    public observacaoColeta: string;
    public metaSaturacaoBase: number;
    public culturaIdadePlantioList: CulturaIdadePlantio[];
    public espacamentoQuantidade: number;
    public unidadeProdutividade: string;
    public culturaNecessidadeAduboFormacaoList: CulturaNecessidadeAduboFormacao[];
    public culturaNecessidadeAduboProducaoList: CulturaNecessidadeAduboProducao[];
    public formaPlantio: string[];
}
