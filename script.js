// ARRAY DE LIVROS
const livrosEncontrados = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        imagem: "https://images.tcdn.com.br/img/img_prod/1271663/dom_casmurro_edicao_de_luxo_almofadada_89_1_038fb70c564eb50f71ea49f6027e827a.jpg",
        disponivel: true
    },
    {
        id: 2,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        imagem: "https://s5.static.brasilescola.uol.com.br/be/2023/09/capa-do-livro-o-pequeno-principe-de-antoine-de-saint-exupery-publicado-pela-faro-editorial.jpg",
        disponivel: false
    },
    {
        id: 3,
        titulo: "Harry Potter",
        autor: "J.K. Rowling",
        imagem: "https://i0.wp.com/animagos.com.br/wp-content/uploads/2017/07/livro-01_capa.jpg?ssl=1",
        disponivel: true
    },
    {
        id: 4,
        titulo: "Senhor dos Anéis",
        autor: "Tolkien",
        imagem: "https://m.media-amazon.com/images/I/91k0NXj1+wL._SL1500_.jpg",
        disponivel: true
    }
];


// 2. PEGAR A DIV
const resultados = document.getElementById("resultadosBusca");


// 3. FUNÇÃO PARA EXIBIR
function exibirLivros(lista) {

    resultados.innerHTML = "";

    const grid = document.createElement("div");
    grid.classList.add("grid-livros");

    lista.forEach(livro => {

        // CARD
        const card = document.createElement("div");
        card.classList.add("card-livro");

        // IMAGEM
        const img = document.createElement("img");
        img.src = livro.imagem;

        // TITULO
        const titulo = document.createElement("p");
        titulo.textContent = livro.titulo;

        // STATUS
        const status = document.createElement("p");

        if (livro.disponivel) {
            status.textContent = "Disponível";
            status.style.color = "lightgreen";
        } else {
            status.textContent = "Indisponível";
            status.style.color = "red";
        }

        // BOTÃO
        const botao = document.createElement("button");
        botao.textContent = "Reservar";

        // se já estiver indisponível
        if (!livro.disponivel) {
            botao.disabled = true;
        }

        // EVENTO DE CLIQUE
        botao.addEventListener("click", () => {

            botao.textContent = "Reservado!";
            botao.disabled = true;

            status.textContent = "Indisponível";
            status.style.color = "red";

            console.log("Livro reservado:", livro.titulo);
        });

        // montar card
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(status);
        card.appendChild(botao);

        grid.appendChild(card);
    });

    resultados.appendChild(grid);
}


// 4. EXECUTAR
exibirLivros(livrosEncontrados);