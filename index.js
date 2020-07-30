import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Jacson", 23423423434);

//const cliente2 = new Cliente("Jalice", 98978779879);

const contaJacson = new Conta(1001, cliente1);
contaJacson.depositar(500);

const contaPoupanca = new Conta(50, cliente1,1001)
//const contaJalice = new ContaCorrente(102, cliente2);

//const contaJalice = new ContaCorrente();
//contaJalice.cliente = new Cliente();
//contaJalice.cliente.nome = 0;
//contaJalice.cliente.cpf = 979878797999;
//contaJalice.agencia = 102;

//null
//const contaJoana = new ContaCorrente();
//contaJoana.cliente = null;
//contaJoana.cliente.nome = "Janice";
//contaJoana.cliente.cpf = 979878797999;
//contaJoana.agencia = 102;


//undefined
//const contaJulia = new ContaCorrente();
//contaJulia.cliente = new Cliente();
//contaJulia.cliente.nome = "Janice";
//contaJulia.cliente.cpf = 979878797999;
//contaJulia.agencia = 102;

//contaJacson.trasferir(200, contaJalice);

console.log(contaJacson);
//console.log(contaJalice);
console.log(contaPoupanca);
//console.log(contaJoana);
//console.log(contaJulia);