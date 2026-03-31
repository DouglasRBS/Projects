const funcao = function nomeFuncao() {
    console.log("Executando a função na const")
}

funcao();

function soma(valor1, valor2) {
    return valor1 + valor2;
}

const funcaoConsoleLog = (val1, val2) => {
if (val1 == undefined || val2 == undefined) {
    return 0;
    }  
    return val1 + val2;
}

function calculo(funcao1, funcao2) {
    return funcao1() + funcao2()
}

console.log(soma(5, 10))
console.log(soma(5, 10) + (5, 10))

