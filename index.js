import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Jacson", 23423423434);

const cliente2 = new Cliente("Jalice", 98978779879);

//const contaJacson = new ContaCorrente(cliente1, 2002);
//contaJacson.depositar(500);
//contaJacson.sacar(50);

//const contaJalice = new ContaPoupanca(0, cliente2,1001)
const conta = new Conta(0, cliente1, 1001);
//contaJalice.depositar(50);
//contaJalice.sacar(30);

//const conta = new Conta(0, cliente1, 1001);
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

//console.log(contaJacson);
//console.log(contaJalice);
//console.log(contaJalice);
console.log(conta);