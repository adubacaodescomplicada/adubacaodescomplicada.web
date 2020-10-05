import { Adubo } from './../modelo/entidade/adubo';
import { CulturaIdadePlantio } from './../modelo/entidade/cultura-idade-plantio';
import { Pessoa } from '../modelo/entidade/pessoa';
import { Cultura } from '../modelo/entidade/cultura';
import { CulturaTipo } from '../modelo/entidade/cultura.tipo';
import { ReceitaAnaliseSoloParametro } from './receita.analise.solo.parametro';
import { Espacamento } from '../modelo/entidade/espacamento';
import { ReceitaAmostragemSolo } from '../modelo/entidade/receita-amostragem-solo';

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
}
