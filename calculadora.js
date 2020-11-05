//Calculadora imcompleta, a oeração somar funciona e as outras não (a operação subtrair funciona mas não perfeitamente);
//Outra questão, só funciona relmente a partir do momento em que chama a função pela segunda vez, ou seja, clicou no número,
//clicou no sinal e posteriormente em outro numero, não funciona, mas caso repita esses dois ultimos passos, ai sim funciona;

var op = false;
var resultado = 0;
var resultado2 = 0;
var valor = 0;
var valor1 = 0;
var somar1 = false;
var subtrair1 = false;
var multiplicar1 = false;
var dividir1 = false;
var potenciar1 = false;
var radiciar1 = false;
var flag = false;

//Cada vez que clica, retorna um valor e esse valor é passado para a var 'valor';
function botao(num) {
    if (flag) {
        document.calc.visor.value = resultado2;
        flag = false;
    }
    valor = Number(document.calc.visor.value += num);
    return valor;
}

//caso resetar seja chamada, passa o valor inicial de todas as variáveis e espaço em branco no visor;
function resetar() {
    document.calc.visor.value = '';
    op = false;
    resultado = 0;
    valor = 0;
    valor1 = 0;
    somar1 = false;
    subtrair1 = false;
    multiplicar1 = false;
    dividir1 = false;
    potenciar1 = false;
    radiciar1 = false;
}

//retorna a operação de soma
function somar() {
    //valor1 = valor;

    //resultado2 = valor + "+" + resultado;
    flag = true;
    resultado = valor + resultado;
    document.calc.visor.value = '';
    somar1 = true;
}

//retorna a operação de subtração;
function subtrair() {
    //valor1 = valor;
    flag = true;
    resultado = (+valor) - (resultado);
    document.calc.visor.value = '';
    subtrair1 = true;
}

//retorna a operação de multiplicação;
function multiplicar() {
    //valor1 = valor;
    console.log(valor + "<" + resultado)
    flag = true;
    resultado = valor ** resultado;
    document.calc.visor.value = '';
    multiplicar1 = true;
    return valor1;
}

//retorna a operação de divisão;
function dividir() {
    //valor1 = valor;
    flag = true;
    resultado = valor / resultado;
    document.calc.visor.value = '';
    dividir1 = true;
}

//retorna a operação de potenciação;
function potenciar() {
    //valor1 = valor;
    flag = true;
    resultado = valor ** resultado;
    document.calc.visor.value = '';
    potenciar1 = true;
}

//retorna a operação de radicioação;
function radiciar() {
    //valor1 = valor;
    flag = true;
    resultado = Math.sqrt((Number(valor)));
    document.calc.visor.value = '';
    radiciar1 = true;
}

//retorna o resultado das operações
function calcular() {
    document.calc.visor.value = resultado;
}

//Inclui '.'(ponto) nas contas e consequentemente no visor;
function ponto() {
    valor = document.calc.visor.value += ".";
}
