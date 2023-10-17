





function handleCredentialResponse(response) {
          const data = jwt_decode(response.credential)
          if (response.credential) {
            // Redirecionar o usuário para a página desejada
            window.location.href = "loading.html";
            //const redirectUrl = `Perfil.html?pic=${encodeURIComponent(data.picture)}`;

            // Redirecionar o usuário para a página "loading.html" com o parâmetro de consulta
           // window.location.href = redirectUrl;
        }
        console.log(data)
          
          
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "288821345248-dof40lnsognoooda6b66ob8l2l9shv5p.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large", logo_alignment:"center" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}




// Seleciona o formulário e o elemento de resultado
const form = document.getElementById("trainer-form");
const resultado = document.getElementById("resultado");

// Reproduza a música automaticamente após o carregamento da página
window.addEventListener('load', function() {
    const audio = document.getElementById('pokemon-audio');
    audio.play();
        });

// Adiciona um ouvinte de evento para o formulário
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
