// ************************************************ Atividade 01 **********************************************************


//faça um programa que calcule a circurferência (área) de um circulo,
//utilizando alguns conceitos, tais como,
//variaveis, operadores aritimeticos, concatenação, etc
// lembre-se da estrutura dos dados (Entradada de dados, processamento e sai)
// tendo em mente que o raio da circunferência é de R = 16


// const Pi = 3.14;
// let R = 16
// const resul = R * R
// console.log(resul*Pi)

// function areaCirculo (Pi, R) {
//   let Raio = R * R
//   return Raio * Pi
// }

// console.log(areaCirculo(Pi, R))

// ************************************************ Atividade 02 **********************************************************

// 1 - Crie um algoritmo que calcule a idade de uma pessoa em 
// a) Meses
// b) Dias
// c) Horas
// d) Minutos

// const dataNascimento = new Date('1998-02-24')
// console.log(dataNascimento)

// const dataAtual = new Date();
// console.log(dataAtual)


// const diferencaEmMilissegundos = dataAtual - dataNascimento;
// const diferencaEmSegundos = diferencaEmMilissegundos / 1000;
// const diferencaEmMinutos = diferencaEmSegundos / 60;
// const diferencaEmHoras = diferencaEmMinutos / 60;
// const diferencaEmDias = diferencaEmHoras / 24;
// const diferencaEmMeses = diferencaEmDias / 30;

// const anos = Math.floor(diferencaEmDias / 365);
// const meses = Math.floor(diferencaEmMeses);
// const dias = Math.floor(diferencaEmDias % 365);
// const horas = Math.floor(diferencaEmHoras % 24);
// const minutos = Math.floor(diferencaEmMinutos % 60);


// console.log(`Idade: ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos`);

// ************************************************ Atividade 03 **********************************************************


// 3- Crie um algoritmo para calcular a media de um aluno 
// considere que o aluno possui 4 notas

const notas = [5,5,5,7]


function mediaAluno (notas) {

    const arr = notas.reduce((acc, ele)=> acc + ele)
    const media = arr / notas.length

    if(media === 0) {
        return "Reprovado!"
    } else if (media <= 5) {
        return "Recuperação"
    } else {
        return "Aprovado!"
    }
}

console.log(mediaAluno(notas))










 




