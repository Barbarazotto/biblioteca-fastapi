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

🌐 Conceitos de Web / Sistema

# API (Application Programming Interface)
→ Interface que permite comunicação entre sistemas.
→ No projeto: conecta front-end (JS) com back-end (FastAPI).

# REST (arquitetura de API)
→ Forma de organizar APIs usando HTTP.
→ Usa métodos: GET, POST, PUT, DELETE.

# HTTP
→ Protocolo de comunicação da web.
→ Usado para enviar requisições e respostas.

# Requisição (request)
→ Pedido enviado do front-end para o back-end.

# JSON
→ Formato de dados (parecido com objeto JS).
→ Usado para trocar informações entre sistemas.

⚙️ FASTAPI (BACK-END)

# FastAPI
→ Framework Python para criar APIs.
→ Responsável pelas rotas do CRUD.
→ Aparece no main.py.

# Rotas (endpoints)
→ Caminhos da API.
→ Ex: /livros, /livros/{id}.

# CRUD
→ Create (POST), Read (GET), Update (PUT), Delete (DELETE).

# Swagger
→ Interface automática da API.
→ Acessado em /docs.
→ Permite testar rotas.

# Pydantic
→ Valida dados recebidos na API.
→ Garante formato correto do JSON.

# CORS
→ Libera comunicação entre front e back-end.
→ Sem isso o navegador bloqueia a API.

🗄️ BANCO DE DADOS

# SQLite
→ Banco de dados local (arquivo .db).
→ Armazena os livros.

# SQLAlchemy
→ Biblioteca que conecta Python ao banco.
→ Cria tabelas e faz consultas.

# Engine
→ Conexão com o banco.

# Session
→ Responsável por executar ações no banco.

💻 FRONT-END (HTML / CSS / JS)
📄 HTML

# HTML
→ Estrutura da página.

# div
→ Caixa/organização de elementos.
→ Usada para separar partes da tela.

# class
→ Nome para estilização no CSS.
→ Ex: .card-livro.

# id
→ Identificador único.
→ Usado no JS com getElementById.

# form
→ Formulário de envio de dados.
→ Usado no cadastro de livros.

# input
→ Campo de entrada de dados.

🎨 CSS

# CSS
→ Estilização da página.

# reset (*)
→ Zera estilos padrão do navegador.

# flexbox
→ Centraliza elementos.

# grid
→ Organiza em colunas/linhas.

# hover
→ Efeito quando passa o mouse.

⚡ JAVASCRIPT

# JavaScript
→ Lógica do front-end.

# variável
→ Guarda valores.
→ Ex: let livros = []

# função
→ Bloco de código que executa ações.

# parâmetro
→ Informação que entra na função.

# objeto
→ Estrutura com chave e valor.
→ Ex: { titulo: "Livro" }

# array (lista)
→ Lista de valores.
→ Ex: [1, 2, 3]

# fetch()
→ Faz requisição para API.

# addEventListener
→ Detecta ações do usuário.

# DOM
→ Elementos do HTML acessados pelo JS.

# 🔄 FLUXO DO SISTEMA (IMPORTANTE)

JavaScript → fetch()
→ FastAPI recebe
→ SQLAlchemy consulta SQLite
→ SQLite retorna dados
→ FastAPI responde em JSON
→ JS recebe e mostra na tela

# 🧠 CONCEITOS IMPORTANTES DE PROVA

# Desacoplamento
→ Front-end e back-end separados.

# Cliente-servidor
→ Cliente (HTML/JS) pede dados
→ Servidor (FastAPI) responde

# Interface
→ Parte visual que o usuário vê.

# Lógica de programação
→ Sequência de passos para resolver problemas.

🔥 FRASE FINAL (DECORAR)

O sistema segue uma arquitetura cliente-servidor, onde o front-end consome a API FastAPI, que se comunica com o banco SQLite, retornando dados em JSON de forma organizada e desacoplada.

