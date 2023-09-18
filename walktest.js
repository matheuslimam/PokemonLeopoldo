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

const image = new Image()
image.src = 'imgs/Pellet Town.png'

const playerDownImage = new Image()
playerDownImage.src = 'imgs/cesinhafrente.png'

const playerUpImage = new Image()
playerUpImage.src = 'imgs/cesinhadecostas.png'

const playerLeftImage = new Image()
playerLeftImage.src = 'imgs/cesinhaesquerdista.png'

const playerRightImage = new Image()
playerRightImage.src = 'imgs/cesinhadireitista.png'

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

const coins = [];
const min = 1;
const max = 1200;

// Adicione algumas moedas ao mapa, por exemplo:
for (let i = 0; i < 5; i++){
const randomIntX = Math.floor(Math.random() * (max - min + 1)) + min;
const randomIntY = Math.floor(Math.random() * (max - min + 1)) + min;
coins.push(new ImageCoin({ x: randomIntX , y: randomIntY  }, 'imgs/moeda.png'));
}


const movables = [background, ...boundaries, ...coins]

function rectangularCollision({rectangle1, rectangle2}){
 return(
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
    console.log('colidando')
}

// Simulação de contador de moedas
let contadorMoedas = 0;

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) =>{
        boundary.draw()
  })
   player.draw()

   coins.forEach((coin) => {
    coin.draw();
   
   if (!coin.collected && rectangularCollision({ rectangle1: player, rectangle2: coin })) {
      coin.collected = true;
      console.log('coletada')
      contadorMoedas++;
      document.getElementById('contadorMoedas').textContent = contadorMoedas
      // Aqui você pode adicionar lógica para contabilizar as moedas
      // Por exemplo: coinsCollected++;
    }
  });

   
    let moving = true
    player.moving = false
    if (keys.w.pressed && lastkey == 'w'){
        player.moving = true
        player.image = player.sprites.up
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
