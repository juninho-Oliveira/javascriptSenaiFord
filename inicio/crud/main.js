let data = new Date();

let ano = data.getUTCFullYear();
let mes = (data.getUTCMonth() + 1).toString();
let dia = data.getDate().toString();

let dataAtual = `${dia} ${mes} ${ano}`

console.log(dataAtual)