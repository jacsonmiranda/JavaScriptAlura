//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.construtor == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo conta");
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    // Método abstrato
    sacar(valor){
        throw new Error("O metodo sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } 
        return 0;
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
        
        if(this._tipo == "salario"){
            return; 
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}