# curso_cypress
## Curso Inicial de Cypress

### Comandos :
* Para criar a estrutura do projeto:
   #### `npm init`

* Para instalar o npm:
   #### `npm install` 

* Para instalar cypress:
   #### `npm i cypress --save-dev`
   #### `npm i cypress@version --save-dev`

* Para rodar o projeto Cypress:
   #### `npm run test`

### Estrutura :

<pre>
cypress
|- fixtures 
|-- integration 
    |--- services 
        |---- Books   
            |----- playloads
            |----- request
            |----- tests
|-- plugins
|-- support
cypress.json
package.json
README.md
</pre>

#### Anotações: 
* **playloads** = Tudo o que enviado. Exemplo uma estrutura de Json usado como requisição de envio:
* **request** = Todas as estruturas das requisições:
  * _Padrão de nomeclatura das requisições:_  </br>
  verbo/metodo - endpoint . motivo (request) . extensão </br>
  ex.: GETBooks.request.js

* **test** = Onde ficam os testes, as validações feitas:
  * _Padrão de nomeclatura dos testes:_  </br>
  nome_da_request . especificação (spec) . extensão </br>
  ex.: GETBooks.spec.js
* **cypress.json** = Adiciona a baseUrl que irei realizar os testes.

### Testes Funcionais: 
  * JsonPlaceholder: (https://jsonplaceholder.typicode.com/) </br>
      * GET </br>
      * POST </br>
      * DELETE </br>
      * PUT </br>