import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 13347655819;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 40039320821;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

console.log(contaCorrenteRicardo);
console.log(conta2);