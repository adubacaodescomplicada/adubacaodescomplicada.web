import { EntidadeId } from '../entidade-id';
import { CulturaFormaParcelamento } from './cultura-forma-parcelamento';
import { CulturaIdadePlantio } from './cultura-idade-plantio';
import { CulturaNecessidadeAduboFormacao } from './cultura-necessidade-adubo-formacao';
import { CulturaNecessidadeAduboProducao } from './cultura-necessidade-adubo-producao';
import { CulturaTipo } from './cultura-tipo';
import { ReferenciaBibliograficaCultura } from './referencia-bibliografica-cultura';

export class Cultura implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public culturaTipo: CulturaTipo;
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
    public culturaFormaParcelamentoList: CulturaFormaParcelamento[];
    public espacamentoQuantidade: number;
    public unidadeProdutividade: string;
    public culturaNecessidadeAduboFormacaoList: CulturaNecessidadeAduboFormacao[];
    public culturaNecessidadeAduboProducaoList: CulturaNecessidadeAduboProducao[];
    public referenciaBibliograficaCulturaList: ReferenciaBibliograficaCultura[];
    public formaPlantio: string[];
}
