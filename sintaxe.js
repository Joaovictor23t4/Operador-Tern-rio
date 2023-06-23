/*Sintaxe do Operador Ternário: x = (expressão) ? operando1 : operando2;
Se o resultado for true, o valor de x será operando1, se for false, operando2. (Operandos são expressões (qualquer declaração que resulte em um dado de um determinado tipo) envolvidas em uma operação ou interlidas por um operador. Ex: Usando o operador mais (+) você somará uma ou mais expressões, cada uma delas é um operando).

Ex: x = (5 < 21) ? 8 : 10 // o valor de x é 8
x = (9 - 9) ? 4 : 13 // o valor de x é 13
var boasVindas = `Seja bem-vinda ${nome ? nome : "visitante"}
alert(boasVindas);
*/

const num = 30.2;
console.log(parseInt(num));

const anoNascimento = 1950

 //Processamento
 let mensagemFinal = "";
 (anoNascimento < 1900) ? mensagemFinal = "Você é imortal" : (anoNascimento > 1900 && anoNascimento < 2000) ? mensagemFinal = "Viu o Bug do Milênio" : mensagemFinal = "Não viu o Bug do Milênio";

 console.log(mensagemFinal);

 let num1 = 11.5;

 console.log(parseInt(num1));
