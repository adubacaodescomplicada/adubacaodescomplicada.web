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
    culturaTipo: CulturaTipo;
    cultura: Cultura;
    receitaAnaliseSoloParametroList: ReceitaAnaliseSoloParametro[];
    idadePlantio: CulturaIdadePlantio;
    calcario: Adubo;
    calcarioPercentual: number;
    poDeRocha: Adubo;
    poDeRochaPercentual: number;
    necessidadeCalcario: number;
    necessidadeCalcarioCorrigido: number;
    necessidadePoDeRocha: number;
    necessidadePoDeRochaCorrigido: number;
    receitaAmostragemSolo: ReceitaAmostragemSolo;
    espacamento: Espacamento;
    necessidadeDeGesso: number;
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

    formaAplicacaoAdubo: {id: number, nome: string};
}
