import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupança} from "./contaPoupança.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaPoupança = new Conta(50, cliente1, 1001);

const contaCorrenteRicardo = new Conta(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

console.log(contaPoupança,contaCorrenteRicardo);