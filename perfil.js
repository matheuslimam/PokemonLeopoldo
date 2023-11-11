
const userId = localStorage.getItem('user_id');
const userName = localStorage.getItem('user_name');
const profilePicture = localStorage.getItem('user_pic');
const userPokemon = localStorage.getItem('user_pokemon');

//muda o atributos da pagina
fullname.textContent = userName;
userPokemon.textContent = userPokemon;
pic.setAttribute("src", profilePicture);