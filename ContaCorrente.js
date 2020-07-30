import {Cliente} from "./Cliente.js"
export class ContaCorrente{
    static numeroContas = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this.cliente;
    }
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields

    get saldo(){
        return this._saldo;
    }

}