function atualizarHorario() {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    document.getElementById('horarioAtual').textContent = `${hora}:${minutos}:${segundos}`;
}

setInterval(atualizarHorario, 1000); // Atualiza o horário a cada segundo

// Simulação de contador de moedas
let contadorMoedas = 0;
document.getElementById('contadorMoedas').textContent = contadorMoedas;

// Evento para incrementar o contador de moedas (simulação)
document.addEventListener('click', () => {
    contadorMoedas++;
    document.getElementById('contadorMoedas').textContent = contadorMoedas;
});
