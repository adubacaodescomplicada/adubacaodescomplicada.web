import { FormaAplicacaoAdubo } from './../modelo/entidade/forma-aplicacao-adubo';
import { Adubo } from './../modelo/entidade/adubo';
import { CulturaIdadePlantio } from './../modelo/entidade/cultura-idade-plantio';
import { Pessoa } from '../modelo/entidade/pessoa';
import { Cultura } from '../modelo/entidade/cultura';
import { CulturaTipo } from '../modelo/entidade/cultura.tipo';
import { ReceitaAnaliseSoloParametro } from './receita.analise.solo.parametro';
import { Espacamento } from '../modelo/entidade/espacamento';
import { ReceitaAmostragemSolo } from '../modelo/entidade/receita-amostragem-solo';
import { ReceitaFonteMateriaOrganica } from './receita.fonte.materia.organica';

export class Receita {

    id: number;
    data: string;
    pessoa: Pessoa;
    culturaTipo: CulturaTipo | string;
    cultura: Cultura;
    receitaAnaliseSoloParametroList: ReceitaAnaliseSoloParametro[];
    idadePlantio: CulturaIdadePlantio;
    produtividadeEsperada: number;

    calcario: Adubo;
    calcarioPercentual: number;
    poDeRocha: Adubo;
    poDeRochaPercentual: number;
    necessidadeCalcario: number;
    necessidadeCalcarioCorrigido: number;
    necessidadePoDeRocha: number;
    necessidadePoDeRochaCorrigido: number;
    necessidadeDeGesso: number;

    receitaAmostragemSolo: ReceitaAmostragemSolo;
    espacamento: Espacamento;

    receitaFonteMateriaOrganicaList: ReceitaFonteMateriaOrganica[];
    receitaFonteMateriaOrganicaPercTotal: number;

    receitaFonteFosforoList: ReceitaFonteMateriaOrganica[];
    receitaFonteFosforoPercTotal: number;
    receitaFontePotassioList: ReceitaFonteMateriaOrganica[];
    receitaFontePotassioPercTotal: number;
    receitaFonteNitrogenioList: ReceitaFonteMateriaOrganica[];
    receitaFonteNitrogenioPercTotal: number;

    receitaFonteMicroNutrienteList: ReceitaFonteMateriaOrganica[];
    receitaFonteMicroNutrientePercTotal: number;

    formaAplicacaoAdubo: FormaAplicacaoAdubo;

    necessidadeDeBoro: number;
    necessidadeDeCobre: number;
    necessidadeDeManganes: number;
    necessidadeDeZinco: number;

}
