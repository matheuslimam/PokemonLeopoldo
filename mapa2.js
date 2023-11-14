//Disparado como callback para ?cb=googleTranslateElementInit
function googleTranslateElementInit()
{
    new google.translate.TranslateElement({
        pageLanguage: 'pt', //Idioma principal da página
        includedLanguages: 'en,es', //Idiomas que pode traduzir
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element'); //google_translate_element é o elemento no div
}

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
            playSound("soundtrack/backgroundaudio.mp3");
        });
    
        naoLigarSomButton.addEventListener('click', function() {
            // Coloque aqui o código para não ativar o som
            esconderPopup();
        });
    });
}
else{
        console.log("musicplayed")
        
        playSound("soundtrack/backgroundaudio.mp3");
    }
      




function playSound(audioname){
    let audio = new Audio(audioname);
    audio.loop = true;
    document.body.addEventListener("mousemove", function () {
        audio.play()
        
    })
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
    

// Função para definir um cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para obter o valor de um cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}