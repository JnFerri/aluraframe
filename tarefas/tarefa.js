import {ValidaCodigo} from './regexp.js'

let numeros = [3,2,11,20,8,7]

let numerosTarefa = numeros.map(function(item){
    if(item % 2 == 0){
        return item
    }else{
        return item * 2
    }
})

console.log(numerosTarefa)


// arrow functions

class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];
let aprovados = avaliacoes.filter((prova) => prova.nota >= 7).map((prova) => prova.aluno.nome)

            console.log(aprovados)

//RegExp 
let codigo1 = new ValidaCodigo('GWZ-JJ-12')

let codigo2 = new ValidaCodigo('CXR-JJ-12')

console.log(codigo1.texto)

console.log(codigo2.texto)