import { ModoAplicacao } from './../modelo/entidade/modo-aplicacao';
import { ReceitaFonteAdubo } from './receita.fonte.adubo';
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
import { FormaPlantio } from '../modelo/entidade/forma-plantio';

export class Receita {

    id: number;
    data: string;
    pessoa: Pessoa;
    cultura: Cultura;
    culturaTipo: CulturaTipo | string;
    formaPlantio: FormaPlantio | string;
    receitaAnaliseSoloParametroList: ReceitaAnaliseSoloParametro[];
    idadePlantio: CulturaIdadePlantio;
    produtividadeEsperada: number;
    referencia: number;

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

    receitaFonteFosforoList: ReceitaFonteAdubo[];
    receitaFonteFosforoPercTotal: number;

    receitaFontePotassioList: ReceitaFonteAdubo[];
    receitaFontePotassioPercTotal: number;

    receitaFonteNitrogenioList: ReceitaFonteAdubo[];
    receitaFonteNitrogenioPercTotal: number;

    receitaFonteMicroNutrienteList: ReceitaFonteAdubo[];
    receitaFonteMicroNutrientePercTotal: number;

    formaAplicacaoAdubo: FormaAplicacaoAdubo;

    necessidadeDeBoro: number;
    necessidadeDeCobre: number;
    necessidadeDeManganes: number;
    necessidadeDeZinco: number;

    modoAplicacao: ModoAplicacao;

}
