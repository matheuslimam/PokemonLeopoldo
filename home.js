function atualizarHorario() {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    document.getElementById('horarioAtual').textContent = `${hora}:${minutos}:${segundos}`;
}

setInterval(atualizarHorario, 1000); // Atualiza o horário a cada segundo


    window.onload = function() {
        var musica = document.getElementById('musica');
        musica.play(); // Inicia a reprodução quando a página é carregada
        var aumentarVolume = document.getElementById('aumentarVolume');
        var diminuirVolume = document.getElementById('diminuirVolume');
    
        aumentarVolume.addEventListener('click', function() {
            if (musica.volume < 1) {
                musica.volume += 0.1; // Aumenta o volume em 10%
            }
        });
    
        diminuirVolume.addEventListener('click', function() {
            if (musica.volume > 0) {
                musica.volume -= 0.1; // Diminui o volume em 10%
            }
        });
    }
    
    var elementosOcultos = false;

    window.addEventListener('keydown', function(event) {
        // Verifica se a tecla pressionada é a tecla "H"
        if (event.key === 'h' || event.key === 'H') {
            // Oculta os elementos com ID "elemento1" e "elemento2"
            var elemento1 = document.getElementById('contador');
            var elemento2 = document.getElementById('horario');
            var elemento3 = document.getElementById('navbar');
            var elemento4 = document.getElementById('time');
            var elemento5 = document.getElementById('perfil');
            var elemento6 = document.getElementById('location');
       
        if (elementosOcultos) {
            if (elemento1 && elemento2 && elemento3 && elemento4 && elemento5 && elemento6) {
                elemento1.style.display = 'block';
                elemento2.style.display = 'block';
                elemento3.style.display = 'block';
                elemento4.style.display = 'block';
                elemento5.style.display = 'block';
                elemento6.style.display = 'block';
                elementosOcultos = false;
            }
        }
        else{
            if (elemento1 && elemento2 && elemento3 && elemento4 && elemento5 && elemento6) {
                elemento1.style.display = 'none';
                elemento2.style.display = 'none';
                elemento3.style.display = 'none';
                elemento4.style.display = 'none';
                elemento5.style.display = 'none';
                elemento6.style.display = 'none';
                elementosOcultos = true;
        }
        }
        }
    });
    

