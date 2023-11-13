function aumentarFonte() {
    var body = document.body;
    var tamanhoFonte = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var tamanhoAtual = parseFloat(tamanhoFonte);
    var novoTamanho = tamanhoAtual + 2;
    body.style.fontSize = novoTamanho + 'px';
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    var body = document.body;
    var tamanhoFonte = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var tamanhoAtual = parseFloat(tamanhoFonte);
    var novoTamanho = tamanhoAtual - 2;
    body.style.fontSize = novoTamanho + 'px';
}

// Evento de teclado para aumentar e diminuir a fonte
window.addEventListener('keydown', function (event) {
    if (event.shiftKey) {
        if (event.key === 'M') {
            aumentarFonte();
        } else if (event.key === 'N') {
            diminuirFonte();
        }
    }
});