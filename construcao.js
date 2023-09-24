function atualizarHorario() {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    document.getElementById('horarioAtual').textContent = `${hora}:${minutos}:${segundos}`;
}

function registrarClique() {
    // Crie um objeto de data para definir a data de expiração do cookie
    var dataExpiracao = new Date();
    // Defina a data de expiração para, por exemplo, um mês a partir de hoje
    dataExpiracao.setMonth(dataExpiracao.getMonth() + 1 );
    
    // Crie o cookie com a informação de clique
    document.cookie = "botaoClicado=true; expires=" + dataExpiracao.toUTCString();
    
  }
  console.log(document.cookie)

  function verificarClique() {
    var cookies = document.cookie.split("; ");
    console.log(cookies)
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie[0] === "botaoClicado" && cookie[1] === "true") {
        // O botão foi clicado
        return true;
      }
    }
    // O botão não foi clicado
    return false;
  }
  

  
  const ligarSomButton = document.getElementById('ligarSom');
  ligarSomButton.addEventListener("click", registrarClique);

setInterval(atualizarHorario, 1000); // Atualiza o horário a cada segundo

// JavaScript para mostrar o popup
if(verificarClique() == false){
    document.addEventListener('DOMContentLoaded', function() {
        const popup = document.getElementById('popup');
        const naoLigarSomButton = document.getElementById('naoLigarSom');
        console.log("no verification")

        // Função para mostrar o popup
        function mostrarPopup() {
            popup.style.display = 'flex';
        }
    
        // Função para esconder o popup
        function esconderPopup() {
            popup.style.display = 'none';
        }
    
        // Event listener para mostrar o popup
        setTimeout(mostrarPopup, 2000); // Mostrar o popup após 1 segundo
    
        // Event listeners para os botões
        ligarSomButton.addEventListener('click', function() {
            // Coloque aqui o código para ativar o som
            esconderPopup();
            playSound("soundtrack/pikachu_eating.wav");
        });
    
        naoLigarSomButton.addEventListener('click', function() {
            // Coloque aqui o código para não ativar o som
            esconderPopup();
        });
    });
}
else{
        console.log("musicplayed")
        
        playSound("soundtrack/pikachu_eating.wav");
    }



      
      // Chame a função para simular a interação do usuário antes da reprodução de mídia

/* 
document.addEventListener('DOMContentLoaded', function() {
const BackButton = document.getElementById('back_home');
BackButton.addEventListener('click', function(){
    setTimeout(playSound, 2000); 
    playSound("soundtrack/backgroundaudio.mp3");
    console.log('suave')
})
}); */


/* window.onload = function audio() {
    var musica = document.getElementById('musica');
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


    // Inicia a reprodução programaticamente
    musica.play();
} */


function playSound(audioname){
    let audio = new Audio(audioname);
    audio.loop = true;
    document.body.addEventListener("mousemove", function () {
        audio.play()
        
    })
} 