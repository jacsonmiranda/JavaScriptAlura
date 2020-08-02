import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 2334234234);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Ricardo", 5000, 9876786867);
gerente.cadastrarSenha("1234");
const cliente = new Cliente("Lais", 2000, 76786867);
gerente.cadastrarSenha("12346");

const estaLogado = SistemaAutenticacao.login(diretor, "123");
const estaLogado2 = SistemaAutenticacao.login(gerente, "1234");
const estaLogado3 = SistemaAutenticacao.login(cliente, "12346");

console.log(estaLogado);
console.log(estaLogado2);
console.log(estaLogado3);