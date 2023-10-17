

function sendConfirmationEmail(userEmail) {
  emailjs.init('-8koAh7ngTpQGLFhG'); // Substitua 'seu_user_id' pelo seu user_id do EmailJS

  const templateParams = {
    to_email: userEmail // Substitua pelo endereço de e-mail do usuário
  };

  emailjs.send('default_service', 'template_1zwlm5l', templateParams) // Substitua 'seu_service_id' e 'seu_template_id'
    .then(function(response) {
      console.log('E-mail de confirmação enviado com sucesso:', response);
    }, function(error) {
      console.error('Erro ao enviar o e-mail de confirmação:', error);
    });
}

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  if (response.credential) {
    // Envie o e-mail de confirmação
    sendConfirmationEmail(data.email); // Certifique-se de que "data.email" contenha o endereço de e-mail do usuário

    // Redirecione o usuário para a página desejada
    //window.location.href = "loading.html";
  }
  console.log(data);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "288821345248-dof40lnsognoooda6b66ob8l2l9shv5p.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large", logo_alignment: "center" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

// Seleciona o formulário e o elemento de resultado
const form = document.getElementById("trainer-form");
const resultado = document.getElementById("resultado");

// Reproduza a música automaticamente após o carregamento da página
window.addEventListener('load', function () {
  const audio = document.getElementById('pokemon-audio');
  audio.play();
});

// Adicione um ouvinte de evento para o formulário
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio do formulário padrão

  // Pega os valores dos campos de entrada
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const pokemon = document.getElementById("pokemon").value;

  // Exibe o resultado na div de resultado
  resultado.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>Idade: ${idade}</p>
        <p>Pokémon Favorito: ${pokemon}</p>
    `;
});



