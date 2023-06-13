/*
TURMA: CC1Mb
ALUNO: Vitor Hugo Burns Lessa 

SIMULADO 13/0/2023
LISTA DE EXERCÍCIOS – Construção de Software Web
JAVASCRIPT
Atenção: Em todos os exercícios devem existir comentários
explicando o raciocínio desenvolvido para a questão.

1) Verificar se um número é primo
Crie uma função que receba um número como parâmetro e
determine se ele é primo ou não. Um número primo é aquele
que é divisível apenas por 1 e por ele mesmo.

6) Validar uma senha
Crie uma função que receba uma senha como parâmetro e
verifique se ela atende aos seguintes critérios: ter pelo menos
8 caracteres, conter pelo menos uma letra maiúscula, uma letra
minúscula e um número.

9) Calcular fatorial de um número
Crie uma função que receba um número como parâmetro e
retorne o fatorial desse número. O fatorial de um número é o
produto de todos os números inteiros positivos menores ou
iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 =
120.

11) Converter temperatura
Crie uma função que receba uma temperatura em graus
Celsius como parâmetro e a converta para Fahrenheit. A
fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

12) Verificar se um número é um quadrado perfeito
Crie uma função que receba um número como parâmetro e
determine se ele é um quadrado perfeito. Um quadrado perfeito
é um número inteiro cuja raiz quadrada também é um número
inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua
raiz quadrada é 5, um número inteiro.

*/

// 1) Questão: 
function isPrime(n) {
    // Se o número for igual a 0 ou 1, não será primo, pois um número só é primo se for maior que 1 e divisível por ele mesmo e pelo número 1
    if (n === 0 || n === 1) {
        return false;
    }
    // Considerando que o primeiro número primo é o número 2, então a partir dele 
    for (var x = 2; x < Math.sqrt(n); x++) {
        if (n % x === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(6));


// 6)
function validatePass(password){
    if (!/^\d+$/.test(password)){
        return true;
    }
}
console.log(validatePass(12345678))


// 9) Fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120.
function factorialNum(n)
{
    if (n === 0)
      { return 1; }
    else
      { return n * factorialNum( n - 1 ); }
}
console.log(factorialNum(5))


// 11) Fahrenheit = (Celsius * 9/5) + 32.
function convertCelsius(temp){
    return (temp * 9/5) + 32;
}
console.log(convertCelsius(0))

// 12)