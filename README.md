<h2>POC com Cypress sem utilização do Cucumber</h2>
Projeto de testes automatizados com o framework Cypress, sem utilização do plugin do Cucumber, mas seguindo a sintaxe de 'Dado-Quando-e-Então' dentro do 'Describe'.
<h3>Pré Requisitos</h3>
Ter instalado os seguintes softwares:

* Node.js <br />
Link da ferramenta: <https://nodejs.org/en/download/>

* NPM ( Gerenciador de pacotes para o Node.JS) <br />
Link da ferramenta: <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>


## Execução do projeto em modo Interativo

* 1 - Após clonar o repositório, instalar todas as depedências do projeto<pre>npm install</pre> 
* 2 - Executar o comando para executar o Cypress em Modo Interativo. <pre>npm run cy:open</pre> 
* 3 - A janela do Cypress será aberta com todos os arquivos '.cy'.

---
## Execução do projeto em modo Headless

* 1 - Seguir os passo '1' informado, em 'Execução do projeto em modo interativo'.
* 2 - Comando para executar o Cypress em Modo Headless.<pre>npm run cy:run</pre>
* 3 - A automação de testes será executada em Modo Headless.
