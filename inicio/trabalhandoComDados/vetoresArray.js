//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;


//    indice  =   0    1   2    3        4 
const valores = [18.0, 80, 43, 1.8888, "teste"]

//var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o indice 10 no array

console.log(`
    ${valores[0]}
    ${valores[3].toFixed(1)} //limita as casas decimais em 2 após a virgula
    ${valores[10]}
    ${valores}
    ${valores.length} //extensão do nosso array (numeral)
`);


//metodos de array 2
//1- push -> ultilizado para adicionar itens no array (sempre na ultima posição)
const pushArray = ['Girrafa', 'leão', 'coala', 'camaleão']
console.log(pushArray.length);

//add  valores
pushArray.push('maria')

pushArray.unshift('animal01')

console.log(pushArray.length);
console.log(pushArray);

//2- pop -> remove o ultimo item do array 
const popArray = ['andre', 'leonardo', 'ana', 'beatriz']

console.log(popArray);

//removendo valor
popArray.pop();
console.log(popArray) 

popArray.shift()
console.log(popArray)

//3- delete
const deleteArray = ['banana', 'maça', 'pera', 'uva', 'salada mista']

delete deleteArray[1]
console.log(deleteArray)


// splice -> substituir valores
deleteArray.splice(1, 1, 'teste')
console.log(deleteArray)

//4- filter -> função -. somente visualizar os valores porém não modifica 
const filterArray = [1, 50, 20, 35, 60];
console.log(filterArray)

const resul = filterArray.filter((ele)=> ele > 20)
console.log(resul)


//5- map -> modificar o array existente -> criar um novo array modificado -> funções 
const MapArray2 = [10, 15, 20, 25, 30, 35];
console.log(MapArray2)

const novo = MapArray2.map((ele,)=> ele*2)
console.log(novo)

console.log(MapArray2)


// 6- foreach
const foreachArray = [100, 10, 15, 20, 25, 30, 35];

foreachArray.forEach((ele, index)=> console.log(`valor: ${ele}, indice: ${index}`))

//sort
//Crie um array de nomes e em seguida organize eles em ordem alfabetica 
const sortArray = [ 'janeiro','fevereiro','março','abril','Janeiro'];

console.log(sortArray)


console.log(sortArray.sort());




