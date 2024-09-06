// script.js

// Pega o botão, o campo de pesquisa e a área de resultados
const botaoPesquisar = document.getElementById("botao-pesquisar");
const campoPesquisa = document.getElementById("pesquisa");
const resultados = document.getElementById("resultados");

// Função para exibir as peças filtradas
function exibirPecas(pecasFiltradas) {
    resultados.innerHTML = '';

    if (pecasFiltradas.length === 0) {
        resultados.innerHTML = "<p>Nenhuma peça encontrada.</p>";
        return;
    }

    for (const peca of pecasFiltradas) {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${peca.titulo}</h3>
            <p>${peca.descricao}</p>
            <a href="${peca.link}" target="_blank">Saiba mais</a>
        `;
        resultados.appendChild(div);
    }
}

// Função para filtrar as peças pelo título
function filtrarPecas() {
    const termoPesquisa = campoPesquisa.value.toLowerCase();
    const pecasFiltradas = pecasInformatica.filter(peca => peca.titulo.toLowerCase().includes(termoPesquisa));
    exibirPecas(pecasFiltradas);
}

// Adiciona o evento de clique ao botão de pesquisa
botaoPesquisar.addEventListener("click", filtrarPecas);
