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