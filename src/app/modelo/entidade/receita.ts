import { Adubo } from "./adubo";
import { Cultura } from "./cultura";
import { CulturaIdadePlantio } from "./cultura-idade-plantio";
import { Espacamento } from "./espacamento";
import { FormaAplicacaoAdubo } from "./forma-aplicacao-adubo";
import { FormaIrrigacao } from "./forma-irrigacao";
import { FormaPlantio } from "./forma-plantio";
import { IdadeFaseCultivo } from "./idade-fase-cultivo";
import { ModoProducao } from "./modo-producao";
import { Pessoa } from "./pessoa";
import { ReceitaAmostragemSolo } from "./receita-amostragem-solo";
import { ReceitaAnaliseSoloParametro } from "./receita-analise-solo-parametro";
import { ReceitaFonteAdubo } from "./receita-fonte-adubo";
import { ReceitaModoAplicacao } from "./receita-modo-aplicacao";


export class Receita {

    id: number;
    data: string;
    pessoa: Pessoa;
    cultura: Cultura;
    idadeFaseCultivo: IdadeFaseCultivo | string;
    modoProducao: ModoProducao | string;
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

    receitaModoAplicacao: ReceitaModoAplicacao;

}
