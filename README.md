# javascriptSenaiFord

## 1 - primeiro desafio 
Faça um programa que calcule a circurferência (área) de um círculo,
utilizando alguns conceitos, tais como,
variáveis, operadores aritméticos, concatenação, etc. 
lembre-se da estrutura dos dados (Entrada de dados, Processamento e Saída de dados)
tendo em mente que o raio da circunferência é de R = 16

## 2 - Segundo desafio 

Crie um algoritmo que calcule a idade de uma pessoa em 

a) Meses <br>
b) Dias <br>
c) Horas <br>
d) Minutos <br>


### Projeto ViaCEP
Este projeto é uma aplicação web simples que permite aos usuários obter informações de endereço ao inserir um CEP brasileiro. Ele utiliza a API ViaCEP para buscar e exibir os detalhes do endereço correspondente.

<a href="https://javascript-senai-ford-gnuz.vercel.app/">Deply no Vercel</a>

### Estrutura do Projeto

- Arquivo HTML (index.html):
- Define a estrutura da página web.
- Inclui campos de entrada para nome, e-mail, CEP, 
- endereço, número, bairro, cidade e estado.
- Utiliza folhas de estilo e scripts externos.

### Arquivo CSS (styles/style.css):

- Fornece estilos para os elementos HTML, criando um layout visualmente atraente.
- Implementa um design responsivo usando um sistema de grade.

### Arquivo JavaScript (scripts/main.js):

- Contém funções para interagir com a API ViaCEP e atualizar os campos do formulário.
- Inclui uma função para limpar o formulário, validar a entrada do CEP e lidar com a solicitação à API ViaCEP.
- Utiliza JavaScript assíncrono (async/await) para buscar dados na API.
- Define uma função para preencher os campos do formulário com informações de endereço.

### Uso

1- Abra o arquivo index.html em um navegador da web.
2- Preencha as informações necessárias no formulário, incluindo o CEP.
3- Clique no botão "Salvar" para iniciar a solicitação à API ViaCEP.
4- Os detalhes do endereço obtidos na API serão preenchidos nos campos correspondentes do formulário.
5- O formulário pode ser limpo clicando no botão "Limpar".

#### Funcionalidades Adicionais

- Validação do Formulário:

- Garante que a entrada do CEP contenha exatamente 8 dígitos e consista apenas em caracteres numéricos.
- Fornece feedback ao usuário se o CEP inserido estiver incorreto.

#### Solicitação Automática ao Sair do Campo CEP:

- Aciona automaticamente a solicitação à API ViaCEP quando o usuário sai do campo de entrada do CEP.

### Autor

### Junior Oliveira
- © 2024

### Créditos

#### API ViaCEP:
- https://viacep.com.br/

### Licença

- Este projeto é de código aberto e está disponível sob a Licença MIT.

- Sinta-se à vontade para contribuir, relatar problemas ou sugerir melhorias!