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

// Função para verificar e processar uma conquista
function checkAchievement(achievementName, message) {
    const achievementBox = document.createElement('div');
    achievementBox.classList.add('achievement-box');

    if (getCookie(achievementName) !== 'true') {
        // Conquista alcançada pela primeira vez
        showAchievementPopup(message);
        // Define o cookie para indicar que a conquista foi alcançada
        achievementBox.textContent = message + "Concluído";
        achievementBox.classList.add('achievement-completed');
    } else {
        achievementBox.textContent = message + "Não concluído";
        achievementBox.classList.add('achievement-not-completed');
    }

    document.body.appendChild(achievementBox);
}