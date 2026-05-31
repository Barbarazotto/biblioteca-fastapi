# COLA PARA APRESENTAÇÃO - BIBLIOTECA FASTAPI

## ARQUITETURA DO PROJETO

O projeto segue a arquitetura Cliente-Servidor.

Fluxo:

HTML/CSS/JavaScript (Front-end)
↓
FastAPI (Back-end/API)
↓
SQLite (Banco de Dados)

O front-end não acessa o banco diretamente.

Ele envia requisições para a API.

A API processa a requisição e conversa com o banco de dados.

Isso é chamado de DESACOPLAMENTO.

Desacoplamento = Front-end e Back-end funcionam separadamente.

Vantagens:

* Organização
* Manutenção mais fácil
* Reutilização da API
* Maior escalabilidade

---

## API

API = Application Programming Interface

É uma interface que permite a comunicação entre sistemas diferentes.

Funciona como uma ponte entre aplicações.

Exemplo:

JavaScript → API → Banco de Dados

A API recebe solicitações, processa e devolve respostas.

---

## REST

REST não é uma API.

REST é um padrão utilizado para construir APIs.

Uma API REST utiliza métodos HTTP para manipular recursos.

Exemplo:

/livros

Cada livro é um recurso.

---

## CRUD

CRUD representa as quatro operações básicas de um sistema.

Create = Criar
Read = Ler
Update = Atualizar
Delete = Excluir

Relação com HTTP:

Create → POST
Read → GET
Update → PUT ou PATCH
Delete → DELETE

---

## MÉTODOS HTTP

GET

Utilizado para buscar informações.

Não deve alterar dados do sistema.

Exemplos:

* Buscar livros
* Buscar usuários
* Buscar dados da API

---

POST

Utilizado para criar novos registros.

Exemplo:
Cadastrar um livro.

Código de resposta comum:

201 = Criado com sucesso

---

PUT

Utilizado para atualizar um registro completo.

Todos os campos devem ser enviados novamente.

---

PATCH

Utilizado para atualizar parcialmente um registro.

Apenas os campos alterados são enviados.

Diferença:

PUT = Atualização completa
PATCH = Atualização parcial

---

DELETE

Utilizado para remover registros.

Exemplo:
Excluir um livro.

---

## CÓDIGOS HTTP IMPORTANTES

200 = Sucesso

201 = Criado com sucesso

400 = Requisição inválida

404 = Não encontrado

500 = Erro interno do servidor

---

## JSON

JSON = JavaScript Object Notation

Formato utilizado para troca de dados entre sistemas.

Exemplo:

{
"titulo": "Dom Casmurro",
"autor": "Machado de Assis"
}

A API recebe JSON e devolve JSON.

---

## FASTAPI

FastAPI é um framework Python utilizado para criar APIs.

Funções do FastAPI:

* Criar rotas
* Receber requisições
* Processar dados
* Retornar respostas
* Gerar documentação automática (Swagger)

Exemplo de rota:

@app.get("/livros")

Significa:

Quando alguém acessar /livros usando GET, essa função será executada.

---

## SWAGGER

Swagger é a documentação automática criada pelo FastAPI.

Permite:

* Visualizar rotas
* Testar endpoints
* Ver parâmetros
* Ver respostas da API

Normalmente acessado por:

/docs

---

## SQLITE

SQLite é um banco de dados relacional.

Os dados ficam armazenados em um arquivo local.

Vantagens:

* Leve
* Simples
* Não precisa instalar servidor
* Persistência dos dados

Persistência significa:

Mesmo fechando o programa, os dados continuam salvos.

---

## ARRAY

Array é uma estrutura que armazena vários valores em uma única variável.

Exemplo:

const livros = [];

Pode armazenar:

* Strings
* Números
* Objetos

Muito utilizado para listas.

---

## OBJETO

Objeto é uma estrutura que armazena informações através de propriedades.

Exemplo:

const livro = {
titulo: "Dom Casmurro",
autor: "Machado de Assis"
};

titulo e autor são propriedades.

---

## FUNÇÃO

Função é um bloco de código que executa uma tarefa específica.

Exemplo:

function carregarLivros() {
}

Pode ser chamada várias vezes.

---

## PARÂMETRO

Parâmetro é uma informação recebida por uma função.

Exemplo:

function buscarLivro(id)

"id" é o parâmetro.

---

## ARGUMENTO

Argumento é o valor enviado para um parâmetro.

Exemplo:

buscarLivro(5)

5 é o argumento.

---

## MÉTODO

Método é uma função pertencente a um objeto.

Exemplo:

livros.forEach()

forEach é um método do array.

---

## FOREACH

Percorre todos os elementos de um array.

Exemplo:

livros.forEach(livro => {

})

O parâmetro "livro" representa cada item do array durante a repetição.

---

## ENDPOINT

Endpoint é uma URL específica da API.

Exemplos:

/livros

/livros/1

Cada endpoint possui uma função específica.

---


