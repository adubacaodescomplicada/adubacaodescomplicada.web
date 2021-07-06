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
import { FormaPlantio } from '../modelo/entidade/forma-plantio';
import { FormaIrrigacao } from '../modelo/entidade/forma-irrigacao';

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
    calcarioPrecoPorQuilo: number;
    necessidadeCalcario: number;
    necessidadeCalcarioCorrigido: number;

    poDeRocha: Adubo;
    poDeRochaPercentual: number;
    poDeRochaPrecoPorQuilo: number;
    necessidadePoDeRocha: number;
    necessidadePoDeRochaCorrigido: number;

    necessidadeDeGesso: number;

    receitaAmostragemSolo: ReceitaAmostragemSolo;

    espacamento: Espacamento;

    receitaFonteMateriaOrganicaList: ReceitaFonteAdubo[];
    receitaFonteMateriaOrganicaPercTotal: number;

    receitaFonteFosforoList: ReceitaFonteAdubo[];
    receitaFonteFosforoPercTotal: number;

    receitaFontePotassioList: ReceitaFonteAdubo[];
    receitaFontePotassioPercTotal: number;

    receitaFonteNitrogenioList: ReceitaFonteAdubo[];
    receitaFonteNitrogenioPercTotal: number;

    receitaFonteMicroNutrienteList: ReceitaFonteAdubo[];
    receitaFonteMicroNutrientePercTotal: number;

    receitaFonteCoberturaList: ReceitaFonteAdubo[];
    receitaFonteCoberturaPercTotal: number;

    receitaFonteFertirrigacaoList: ReceitaFonteAdubo[];
    receitaFonteFertirrigacaoPercTotal: number;

    formaIrrigacao: FormaIrrigacao;
    formaAplicacaoAdubo: FormaAplicacaoAdubo;

    necessidadeDeBoro: number;
    necessidadeDeCobre: number;
    necessidadeDeManganes: number;
    necessidadeDeZinco: number;

    modoAplicacao: ModoAplicacao;

}
