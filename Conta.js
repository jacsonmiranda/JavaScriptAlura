
    constructor(saldoInicial, agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroContas += 1;
    }

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
        // no javascrip é possivel alterar o objeto dentro de um método
        conta.cidade = "São leo"; 
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }