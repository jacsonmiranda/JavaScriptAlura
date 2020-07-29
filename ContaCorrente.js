export class ContaCorrente{
    agencia;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;    
    }

    trasferir(valor, conta){
        conta.cidade = "São leo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}