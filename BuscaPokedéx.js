function search() {
    // Limpe os resultados anteriores
    document.getElementById("search-results").innerHTML = "";

    // Obtenha o termo de pesquisa do campo de entrada
    const searchTerm = document.getElementById("search-input").value;

    // Realize a pesquisa nas páginas desejadas
    searchInPage("Pokedex.html", searchTerm);
    searchInPage("PokedexPt2.html", searchTerm);
    searchInPage("PokedexPt3.html", searchTerm);
    searchInPage("PokedexPt4.html", searchTerm);
}

function searchInPage(pageURL, searchTerm) {
    // Realize uma solicitação HTTP (pode ser necessário CORS habilitado)
    fetch(pageURL)
        .then(response => response.text())
        .then(data => {
            // Verifique se o termo de pesquisa está presente na página
            if (data.includes(searchTerm)) {
                // Se encontrado, adicione-o aos resultados
                const resultElement = document.createElement("div");
                resultElement.textContent = `Encontrado em ${pageURL}`;
                document.getElementById("search-results").appendChild(resultElement);
            }
        })
        .catch(error => {
            console.error(`Erro ao buscar ${pageURL}: ${error}`);
        });
}