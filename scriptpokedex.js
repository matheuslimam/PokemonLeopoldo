const book = document.querySelector(".book");
const pages = document.querySelectorAll(".page");
const pageWidth = 500; // Largura fixa para todas as páginas
let currentPage = 0;
let startX = 0;

book.addEventListener("mousedown", (e) => {
    startX = e.clientX;
});

book.addEventListener("mouseup", (e) => {
    const endX = e.clientX;
    const deltaX = endX - startX;
    const threshold = 50;

    if (deltaX > threshold) {
        if (currentPage > 0) {
            currentPage=currentPage-0.5;        }
    } else if (deltaX < -threshold) {
        if (currentPage < pages.length - 1) {
            currentPage=currentPage+0.5;
                }
    }

    // Garante que currentPage não seja menor que 0 nem maior que o número de páginas
    currentPage = Math.max(0, Math.min(currentPage, pages.length - 1));

    updateBook();
});

function updateBook() {
    pages.forEach((page, index) => {
        const offset = (index - currentPage) * pageWidth;
        page.style.transform = `translateX(${offset}px)`;
    });
}

updateBook();

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
