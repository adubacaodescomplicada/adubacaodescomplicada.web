import { Pessoa } from '../modelo/entidade/pessoa';
import { Cultura } from '../modelo/entidade/cutura';
import { CulturaTipo } from './../modelo/entidade/cutura.tipo';
import { ReceitaAnaliseSoloParametro } from './receita.analise.solo.parametro';

export class Receita {

    id: number;
    data: string;
    pessoa: Pessoa;
    culturaTipo: CulturaTipo;
    cultura: Cultura;
    receitaAnaliseSoloParametroList: ReceitaAnaliseSoloParametro[];

}
