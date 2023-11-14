const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Função para definir o tamanho do canvas
function resizeCanvas() {
    document.getElementById(canvas);
    canvas.width = window.innerWidth; // Define a largura igual à largura da janela
    canvas.height = window.innerHeight; // Define a altura igual à altura da janela
}

// Chamada inicial para definir o tamanho do canvas ao carregar a página
window.onload = function() {
    resizeCanvas();
};

// Chama a função resizeCanvas sempre que a janela é redimensionada
window.addEventListener('resize', resizeCanvas);


const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}



const boundaries = []
const offset = {
  x: -740,
  y: -600
}


collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if(symbol === 1025)
            boundaries.push(
                new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const hora = new Date().getHours()

//muda de dia para noite
const image = new Image()
if (hora >= 6 && hora <= 18){
    image.src = 'imgs/Pellet Town.png'
} else {
    image.src = 'imgs/Pellet Town Night.png'
    
}


const userId = localStorage.getItem('user_id');

//cria as imagens
const playerDownImage = new Image()
const playerUpImage = new Image()
const playerLeftImage = new Image()
const playerRightImage = new Image()

if (getCookie(`caracter__${userId}`) == "cesar" ){

    playerDownImage.src = 'imgs/cesinhafrente.png'
    playerUpImage.src = 'imgs/cesinhadecostas.png'
    playerLeftImage.src = 'imgs/cesinhaesquerdista.png'
    playerRightImage.src = 'imgs/cesinhadireitista.png'

}

else if (getCookie(`caracter__${userId}`) == "lima" ){

    console.log("lima");
    playerDownImage.src = 'imgs/limafrente.png'
    playerUpImage.src = 'imgs/limadecostas.png'
    playerLeftImage.src = 'imgs/limaesquerdista.png'
    playerRightImage.src = 'imgs/limadireitista.png'

}
else if (getCookie(`caracter__${userId}`) == "caricas" ){

    playerDownImage.src = ''
    playerUpImage.src = ''
    playerLeftImage.src = ''
    playerRightImage.src = ''

}
else if (getCookie(`caracter__${userId}`) == "dudu" ){

    playerDownImage.src = ''
    playerUpImage.src = ''
    playerLeftImage.src = ''
    playerRightImage.src = ''
    
}




const player = new Sprite({
    position: {
      x: canvas.width * 2 -115,
      y: canvas.height * 2 -20  
    },
    image: playerDownImage ,
    frames: {
      max: 4,
    },
    sprites: {
        up: playerUpImage,
        down: playerDownImage,
        left: playerLeftImage,
        right: playerRightImage
    }
})


const followingCharacterSpeed = 3;


//cria as imagens
const followingCharacterFront = new Image()
const followingCharacterBack = new Image()
const followingCharacterLeft = new Image()
const followingCharacterRight = new Image()

//verifico qual eh o inicial da pessoa
if (getCookie(`userPokemon_${userId}`) == "bubassour" ){

    followingCharacterFront.src = 'imgs/bubafront.png'
    followingCharacterBack.src = 'imgs/bubaback.png'
    followingCharacterLeft.src = 'imgs/bubaleft.png'
    followingCharacterRight.src = 'imgs/bubaright.png'

}

else if (getCookie(`userPokemon_${userId}`) == "charmander" ){


    followingCharacterFront.src = 'imgs/charmfront.png'
    followingCharacterBack.src = 'imgs/charmback.png'
    followingCharacterLeft.src = 'imgs/charmleft.png'
    followingCharacterRight.src = 'imgs/charmright.png'

}
else if (getCookie(`userPokemon_${userId}`) == "squirtle" ){


    followingCharacterFront.src = 'imgs/squirtfront.png'
    followingCharacterBack.src = 'imgs/squirtback.png'
    followingCharacterLeft.src = 'imgs/squirtleft.png'
    followingCharacterRight.src = 'imgs/squirtright.png'

}
else if (getCookie(`userPokemon_${userId}`) == "Pikachu" ){

    followingCharacterFront.src = 'imgs/pikafront.png'
    followingCharacterBack.src = 'imgs/pikaback.png'
    followingCharacterLeft.src = 'imgs/pikaleft.png'
    followingCharacterRight.src = 'imgs/pikaright.png'
    
}


const followingCharacter = new Sprite({
    position: {
        x: canvas.width + 75, // Defina a posição inicial conforme necessário
        y: canvas.height * 2 - 20,
    },
    image: followingCharacterFront, // Substitua com a imagem do personagem que seguirá o jogador
    frames: {
        max: 4,
    },
    sprites: {
        up: followingCharacterBack,
        down: followingCharacterFront,
        left: followingCharacterLeft,
        right: followingCharacterRight
    }
    // Adicione outras configurações necessárias para o personagem que segue
});

const pokemonTeam1 = new Image();
pokemonTeam1.src = 'imgs/pokemon1.png';

const pokemonTeam2 = new Image();
pokemonTeam2.src = 'imgs/charmfront.png';

const pokemonTeam3 = new Image();
pokemonTeam3.src = 'imgs/pikafront.png';

const pokemon1 = new Sprite({
    position: {
        x: 700,
        y: 300,
    },
    image: pokemonTeam1,
    frames: {
        max: 4,
    },

});

const pokemon2 = new Sprite({
    position: {
        x: 900,
        y: 300,
    },
    image: pokemonTeam2,
    frames: {
        max: 4,
    },

});

const pokemon3 = new Sprite({
    position: {
        x: 750,
        y: 0,
    },
    image: pokemonTeam3,
    frames: {
        max: 4,
    },

});


const NPCpic = new Image();
NPCpic.src = "imgs/NPCspritepescadorv2.png";

const NPC = new Sprite({
    position: {
        x: 1700,
        y: 200,
    },
    image: NPCpic,
    frames: {
        max: 4,
    },
    sprites: {
        up: NPCpic,
        }
});




const background = new Sprite({position:{
    x: offset.x,
    y: offset.y
    },
    image: image
})

const keys = {
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    s:{
        pressed: false
    },
    d:{
        pressed: false
    }
}


function isPlayerCollidingWithCharacter(player, character) {
    return rectangularCollision({
        rectangle1: player,
        rectangle2: character,
    });
}


let coinsPushed = getCookie('coinsPushed');

const excludedAreas = [
    { x: 920, y: 500, width: 300, height: 100}, // Adicione mais áreas conforme necessário
     { x: 300, y: 0, width: 350, height: 300 }, // casa de baixo
     { x: 0, y: 650, width: 600, height: 300 }, //casa principal
     { x: 1600, y: 650, width: 400, height: 400 }, // laterais inferiores esquerdas
     { x: 1650, y: -225, width: 200, height: 300 }, //laterais superiores direitas
];

const maxTotalCoins = 15;
const coins = [];
const centralPosition = { x: 920, y: 400 }; // Posição central
const halfWidth = 875; // Metade da largura do retângulo
const halfHeight = 370; // Metade da altura do retângulo

function isInsideExcludedAreas(x, y) {
    return excludedAreas.some((area) => {
        return (
            x >= area.x &&
            x <= area.x + area.width &&
            y >= area.y &&
            y <= area.y + area.height
        );
    });
}

function isInsideBoundaries(x, y) {
    return boundaries.some((boundary) =>
        rectangularCollision({
            rectangle1: { position: { x, y }, width: 50, height: 50 }, // Ajuste o valor de width e height conforme necessário
            rectangle2: boundary,
        })
    );
}
if(coinsPushed == false){
for (let i = 0; i < maxTotalCoins; i++) {
    let randomIntX, randomIntY;

    // Garante que a moeda não está dentro das áreas excluídas e das "boundaries"
    do {
        randomIntX = centralPosition.x + (Math.random() * 2 - 1) * halfWidth;
        randomIntY = centralPosition.y + (Math.random() * 2 - 1) * halfHeight;
    } while (isInsideExcludedAreas(randomIntX, randomIntY) || isInsideBoundaries(randomIntX, randomIntY));

    coins.push(new ImageCoin({ x: randomIntX, y: randomIntY }, 'imgs/moeda.png'));
    
}
setCookie('coinsPushed', "true", 0.02);
coinsPushed = true;
}




const movables = [background, ...boundaries, ...coins, NPC, pokemon1, pokemon2, pokemon3]

function rectangularCollision({rectangle1, rectangle2}){
 return(
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
    console.log('colidando')
}

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

// Inicializa o contadorMoedas a partir do cookie ou define como 0 se não estiver presente
let contadorMoedas = parseInt(getCookie('contadorMoedas')) || 0;
document.getElementById('contadorMoedas').textContent = contadorMoedas;




function showAchievementPopup(achievementName) {

    const userId = localStorage.getItem('user_id');    
    if(!getCookie(`${achievementName}_${userId}`)){

    const popup = document.getElementById('achievementPopup');


       popup.style.opacity = 1;
       popup.style.display = 'block'
       setCookie(`${achievementName}_${userId}`, "true", 365)
       achievementText.textContent = achievementName;

      setTimeout(() => {
    popup.style.opacity = 0;
      }, 3000); // Exibir por 3 segundos

      return true
    }
    
}
  



if(!getCookie(`completePokemon__${userId}`)){

const instructionsArray = [
    'Para ir para a próxima vila e completar sua missão, você deve recrutar 3 pokémons para o seu time!',
    'os Pokemons irão aparecer às 7, 15 e 19 horas para você captura-los',
    'Explore as áreas circundantes para encontrar novos pokémons!',
    'Lembre-se de pegar as moedas espalhadas pelo mapa, você vai precisar de 30!',
    'Converse com outros NPCs para obter dicas valiosas sobre a região!'
];

// Variável para rastrear a instrução atual
let currentInstructionIndex = 0;

// Função para obter a próxima instrução
function getNextInstruction() {
    const instruction = instructionsArray[currentInstructionIndex];
    currentInstructionIndex = (currentInstructionIndex + 1) % instructionsArray.length; // Avança para a próxima instrução
    return instruction;
}

// Inicia o temporizador uma vez fora do bloco if
const instructionTimer = setInterval(function() {
    const popup2 = document.getElementById('popup2');
    const instructions = document.getElementById('instructions');
    instructions.textContent = getNextInstruction();
    popup2.style.display = 'flex';
}, 5000);
}
else{
    instructions.textContent = "Parabéns você concluiu sua missão aqui"
    instructions2.textContent = "Vamos te levar ao outro mapa em instantes";
    //redirecionar para outro mapa
}

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) =>{
        boundary.draw()
  })

  

  if(hora >=7 && hora <= 10 && !getCookie(`pokemon1Capture_${userId}`)){
    pokemon1.draw();
  }
  if(hora >= 15 && hora <= 18 && !getCookie(`pokemon2Capture_${userId}`)){
   pokemon2.draw();
   }
   else if(hora >= 19 && hora <= 22 && !getCookie(`pokemon3Capture_${userId}`)){
   pokemon3.draw();
  }
   player.draw()
   
   //pescador.draw();
   NPC.draw()
   followingCharacter.draw()

   coins.forEach((coin) => {
    coin.draw();
   
    //conquistas

    if(getCookie(`pokemon1Capture_${userId}`) && getCookie(`pokemon2Capture_${userId}`) && getCookie(`pokemon3Capture_${userId}`) && getCookie('contadorMoedas') >= 30){
        setCookie(`completePokemon__${userId}`, "true", 365);
        showAchievementPopup("Mapa Desbloqueado");
    }
    
    

    if(getCookie(`pokemon1Capture_${userId}`) || getCookie(`pokemon2Capture_${userId}`) || getCookie(`pokemon3Capture_${userId}`) && showAchievementPopup("Primeira Captura")){
        showAchievementPopup("Primeira Captura");
        console.log("capturou pela 1 vez")
    }

   if (!coin.collected && rectangularCollision({ rectangle1: player, rectangle2: coin })) {
      coin.collected = true;
      console.log('coletada')
      contadorMoedas++;
      document.getElementById('contadorMoedas').textContent = contadorMoedas
      if(contadorMoedas == 1){
        showAchievementPopup("Primeira Moeda");
        }
        else if(contadorMoedas == 30){
        showAchievementPopup("Finalmente 30!");
        }
      // Armazena o contadorMoedas em um cookie
      setCookie('contadorMoedas', contadorMoedas, 365);
      // Aqui você pode adicionar lógica para contabilizar as moedas
      // Por exemplo: coinsCollected++;
    }
  });

if (isPlayerCollidingWithCharacter(player, pokemon1) && !getCookie(`pokemon1Capture_${userId}`) && hora >=7 && hora <= 10) {

    console.log('Player capturou POKEMON1');
    pokemon1.position.x = 10000
    pokemon1.position.y = 10000
    setCookie(`pokemon1Capture_${userId}`, "true", 365)
}
else if (isPlayerCollidingWithCharacter(player, pokemon2) && !getCookie(`pokemon2Capture_${userId}`) && hora >= 15 && hora <= 18 ) {

    console.log('Player capturou POKEMON2');
    pokemon2.position.x = 10000
    pokemon2.position.y = 10000
    setCookie(`pokemon2Capture_${userId}`, "true", 365)
}

else if (isPlayerCollidingWithCharacter(player, pokemon3) && !getCookie(`pokemon3Capture_${userId}`) && hora >= 19 && hora <= 22 ) {

    console.log('Player capturou POKEMON3');
    pokemon3.position.x = 10000
    pokemon3.position.y = 10000
    setCookie(`pokemon3Capture_${userId}`, "true", 365)
}


if (isPlayerCollidingWithCharacter(player, NPC)) {
   
    const popup2 = document.getElementById('popup2');
    popup2.style.display = 'flex';
} 
else {
    popup2.style.display = 'none';
    //clearInterval(instructionTimer);
}

    
    let moving = true

    NPC.moving = true
    NPC.image = NPC.sprites.up

    player.moving = false
    followingCharacter.moving = false

    if (keys.w.pressed && lastkey == 'w'){
        player.moving = true
        player.image = player.sprites.up

        followingCharacter.position.x = 475;
        followingCharacter.position.y = 360;
        followingCharacter.moving = true
        followingCharacter.image = followingCharacter.sprites.up

        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        } 

        if(moving)
            movables.forEach((movable) => {
            movable.position.y +=3
        })
    }
        else if (keys.a.pressed && lastkey == 'a'){ 
            player.moving = true
            player.image = player.sprites.left

            followingCharacter.position.x = 550;
            followingCharacter.position.y = 300;
            followingCharacter.moving = true
            followingCharacter.image = followingCharacter.sprites.left

            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            } 
    
            if(moving)
            movables.forEach((movable) => {
                movable.position.x +=3
            })
        } 
        else if (keys.s.pressed && lastkey == 's'){ 
            player.moving = true
            player.image = player.sprites.down

            followingCharacter.position.x = 470;
            followingCharacter.position.y = 185;

            followingCharacter.moving = true
            followingCharacter.image = followingCharacter.sprites.down

            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            } 
    
            if(moving)
            movables.forEach((movable) => {
                movable.position.y -=3
            })
        } 
        else if (keys.d.pressed && lastkey == 'd'){ 
            player.moving = true
            player.image = player.sprites.right

            followingCharacter.position.x = 400;
            followingCharacter.position.y = 300;
            followingCharacter.moving = true
            followingCharacter.image = followingCharacter.sprites.right

            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            } 
    
            if(moving)
            movables.forEach((movable) => {
                movable.position.x -=3
            })
        } 


    

} 






////////tudo acima
animate()

let lastkey = ''
window.addEventListener('keydown',(e) => {
    console.log(e.key)
    switch (e.key){
        case'w':
        keys.w.pressed = true
        lastkey =  'w'
            break
        case'a':
        keys.a.pressed = true
        lastkey =  'a'
            break
        case's':
        keys.s.pressed = true
        lastkey =  's'
            break
        case'd':
        keys.d.pressed = true
        lastkey =  'd'
            break

    }
})

window.addEventListener('keyup',(e) => {
    console.log(e.key)
    switch (e.key){
        case'w':
        keys.w.pressed = false
            break
        case'a':
        keys.a.pressed = false
            break
        case's':
        keys.s.pressed = false
            break
        case'd':
        keys.d.pressed = false
            break

    }
})
