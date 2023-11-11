
const userId = localStorage.getItem('user_id');
const userName = localStorage.getItem('user_name');
const profilePicture = localStorage.getItem('user_pic');
const userPokemon = localStorage.getItem('user_pokemon');

function hasUserEntered(userId) {
    return getCookie(`userPokemon_${userId}`);
}

//muda o atributos da pagina
fullname.textContent = userName;
userPokemon.textContent = hasUserEntered(userId);
pic.setAttribute("src", profilePicture);

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