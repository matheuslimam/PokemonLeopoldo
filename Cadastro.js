
function handleCredentialResponse(response) {
        const token = response.credential; 
        const tokenData = JSON.parse(atob(token.split('.')[1])); 
        const fullname = tokenData.name;
        const id = tokenData.sub;
        const email = tokenData.email;
        const verifiedEmail = tokenData.email_verified;
        const profilePicture = tokenData.picture;

      
          
          //verifica se teve resposta e se o email eh verificado
          if (response.credential && verifiedEmail) {
            
            localStorage.setItem('user_id', id);
            localStorage.setItem('user_name', fullname);
            localStorage.setItem('user_email', email)
            localStorage.setItem('user_pic', profilePicture);

            // Redirecionar o usuário para a página de loading
            window.location.href = "loading.html";
        }

        console.log(fullname)
        console.log(sub)
        console.log(email)
        console.log(verifiedEmail)
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


