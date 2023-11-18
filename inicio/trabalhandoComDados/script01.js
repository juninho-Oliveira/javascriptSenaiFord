// trabalhar com variaves, console.log()


//Utilizando padrão cameLCase
const carro = 'Carro'
const fabricanteCaro = 'Renault'
const modeloCarro = 'Sandero'
const corCarro = 'Vermelho'
const anoCarro = 2010

//variavel(let,const,var) -> indentificador -> dados

//saida de dados 
// Carro: "Carro"
// fabricante: 'Renault'
// modelo: 'Sandero'
// cor: 'Vermelho'
// ano: 2010

//Primeira forma: Concatenação
console.log("O Carro: " + carro + ", do fabricante: " + fabricanteCaro + ", modelo: " + modeloCarro + ", cor: " + corCarro + ", ano:", + anoCarro)


//Segunda forma: Interpolação
console.log(`O Carro: ${carro}, do fabricante: ${fabricanteCaro}, modelo: ${modeloCarro}, cor: ${corCarro}, ano: ${anoCarro}`)




console.log('Carro', carro)
console.log('Renault', fabricanteCaro)
console.log('Sandero', modeloCarro)
console.log('Vermelho', corCarro)
console.log(2010, anoCarro)
