const alunoUm = {
    nome: "Douglas",
    idade: 21,
    curso: "Eng. Software",
    endereco: {
        rua: "Elias Abraão",
        numero: 91,
    }
}

//console.log(alunoUm.endereco.rua);

const listaValores = [20, 40, 60];


const listaFrutas = [
    "🍓", "🍌", "🍎", "🍊"
]


console.log(listaFrutas);
console.log(listaValores);

const listaAbacates = listaFrutas.map(fruta => "🥑");
const listaVezesDois = listaValores.map(valor => valor * 2);
const listaDeLaranjas = listaFrutas.filter(fruta => fruta = "🍊");

console.log(listaAbacates)
console.log(listaVezesDois)
console.log(listaDeLaranjas)