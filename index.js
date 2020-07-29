import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Jacson";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Jalice";
cliente2.cpf = 88822233309;


const contaJacson = new ContaCorrente();
contaJacson.agencia = 1001;
contaJacson.cliente = cliente1;
contaJacson.depositar(500);
const contaJalice = new ContaCorrente();
contaJalice.cliente = cliente2;
contaJalice.agencia = 102;

contaJacson.trasferir(200, contaJalice);

console.log(contaJacson);
console.log(contaJalice);