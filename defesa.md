# 📚 Cola de Defesa Técnica - Biblioteca FastAPI

## Fluxo Geral do Sistema

O projeto utiliza arquitetura Cliente-Servidor.

Fluxo:

HTML/CSS/JavaScript (Front-end)
↓
FastAPI (API/Back-end)
↓
SQLite (Banco de Dados)

O Front-end não acessa diretamente o banco.

Toda comunicação acontece através da API utilizando requisições HTTP e respostas em JSON.

---

# GET - Buscar Livros

## Onde foi criado?

Arquivo:

main.py

```python
@app.get("/livros")
def listar_livros(db: Session = Depends(get_db)):
    livros = db.query(LivroDB).all()
    return {"dados": livros}
```

## Quem chama essa rota?

Arquivo:

script.js

```javascript
const resposta = await fetch(API_URL);
```

Como não foi definido um método, o fetch utiliza GET automaticamente.

## Fluxo Completo

1. JavaScript executa fetch().
2. FastAPI recebe a requisição.
3. SQLAlchemy consulta o banco.
4. SQLite retorna os dados.
5. FastAPI devolve um JSON.
6. JavaScript recebe os dados.
7. Os livros são exibidos na tela.

---

# POST - Adicionar Livro

## Onde foi criado?

main.py

```python
@app.post("/livros")
def adicionar_livro(...)
```

## Quem chama?

script.js

```javascript
formAdicionar.addEventListener("submit", ...)
```

## Onde o objeto é criado?

```javascript
const novoLivro = {
    titulo: ...,
    autor: ...,
    url_imagem: ...,
    disponivel: true
}
```

## Onde ele é enviado?

```javascript
fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(novoLivro)
})
```

## Fluxo Completo

1. Usuário preenche formulário.
2. JavaScript cria um objeto.
3. O objeto é convertido para JSON.
4. FastAPI recebe os dados.
5. Pydantic valida os campos.
6. SQLAlchemy salva no SQLite.
7. API retorna resposta.
8. Front-end atualiza a tela.

---

# PUT - Atualizar Livro

## Onde foi criado?

main.py

```python
@app.put("/livros/{id}")
```

## Quem chama?

Botão Reservar/Devolver.

```javascript
btnReservar.onclick = () => atualizarStatus(livro);
```

## Onde ocorre o PUT?

```javascript
await fetch(`${API_URL}/${livro.id}`, {
    method: "PUT"
})
```

## O que é atualizado?

```python
livro.disponivel = livro_atualizado.disponivel
```

O status do livro muda entre disponível e indisponível.

---

# DELETE - Excluir Livro

## Onde foi criado?

main.py

```python
@app.delete("/livros/{id}")
```

## Quem chama?

```javascript
btnExcluir.onclick = () => deletarLivro(livro.id);
```

## Onde é enviado?

```javascript
await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
});
```

## Quem remove do banco?

```python
db.delete(livro)
db.commit()
```

---

# Banco de Dados

## Onde o banco é configurado?

main.py

```python
SQLALCHEMY_DATABASE_URL = "sqlite:///./biblioteca.db"
```

Arquivo gerado:

```text
biblioteca.db
```

---

# Tabela do Banco

## Onde foi criada?

```python
class LivroDB(Base):
```

## Colunas

```python
id = Column(Integer, primary_key=True)
titulo = Column(String)
autor = Column(String)
url_imagem = Column(String)
disponivel = Column(Boolean)
```

Cada atributo vira uma coluna na tabela.

---

# Diferença entre LivroDB e Livro

## LivroDB

```python
class LivroDB(Base):
```

Representa a tabela do banco.

Utilizado pelo SQLAlchemy.

Relaciona-se ao SQLite.

---

## Livro

```python
class Livro(BaseModel):
```

Representa os dados recebidos da API.

Utilizado pelo Pydantic.

Valida os dados enviados em JSON.

---

# Pydantic

## Função

Validar dados recebidos pela API.

Exemplo:

Se faltar um campo obrigatório, a API retorna erro automaticamente.

---

# SQLAlchemy

## Função

Permite trabalhar com o banco usando Python.

Sem SQLAlchemy:

```sql
SELECT * FROM livros;
```

Com SQLAlchemy:

```python
db.query(LivroDB).all()
```

---

# Fetch

## O que é?

Função do JavaScript utilizada para fazer requisições HTTP.

Exemplos:

```javascript
fetch(API_URL)
```

```javascript
fetch(API_URL, {
    method: "POST"
})
```

```javascript
fetch(`${API_URL}/${id}`, {
    method: "DELETE"
})
```

---

# JSON

## O que é?

Formato de troca de dados entre sistemas.

Exemplo:

```json
{
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis"
}
```

A API recebe JSON e devolve JSON.

---

# forEach

## O que faz?

Percorre todos os elementos de um array.

Exemplo:

```javascript
lista.forEach(livro => {
});
```

## Quem é "livro"?

É o parâmetro da função callback.

Representa cada item individual do array.

---

# Endpoint

## O que é?

Uma URL da API.

Exemplos:

```text
/livros
```

```text
/livros/1
```

Cada endpoint possui uma responsabilidade específica.

---

# Perguntas Clássicas da Sabatina

## Onde o Front-end conversa com o Back-end?

No script.js através do fetch().

---

## Onde está o banco?

No arquivo SQLite:

```text
biblioteca.db
```

---

## Onde a tabela é criada?

Na classe:

```python
class LivroDB(Base)
```

---

## Onde os livros são exibidos?

Na função:

```javascript
function exibirLivros(lista)
```

---

## Onde os livros são buscados?

Na função:

```javascript
async function buscarLivrosDaAPI()
```

---

## Se eu quiser adicionar o campo "ano", o que preciso alterar?

1. HTML:
   Adicionar um novo input.

2. JavaScript:
   Adicionar o campo ao objeto enviado.

3. Pydantic:
   Adicionar:

```python
ano: int
```

4. SQLAlchemy:

```python
ano = Column(Integer)
```

5. PUT:
   Atualizar o campo.

6. Tela:
   Exibir o ano no card do livro.
