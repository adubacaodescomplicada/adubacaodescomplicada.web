import { Cultura } from './../modelo/entidade/cutura';
import { Endereco } from '../modelo/entidade/endereco';
import { Pessoa } from '../modelo/entidade/pessoa';
import { UnidadeMedida } from '../modelo/entidade/unidade-medida';

export function culturaListComparar(o1: Cultura, o2: Cultura) {
    const result = o1 && o2 ? o1.id === o2.id : o1 === o2;
    return result;
}

export function pessoaEnderecoListComparar(o1: Endereco, o2: Endereco) {
    const result = o1 && o2 ? o1.id === o2.id : o1 === o2;
    return result;
}

export function pessoaListComparar(o1: Pessoa, o2: Pessoa) {
    const result = o1 && o2 ? o1.id === o2.id : o1 === o2;
    return result;
}

export function unidadeMedidaListComparar(o1: UnidadeMedida, o2: UnidadeMedida) {
    const result = o1 && o2 ? o1.id === o2.id : o1 === o2;
    return result;
}
