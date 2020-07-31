import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields

    constructor(agencia, cliente) {
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}