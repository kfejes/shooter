kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
  })


loadSprite('player', "sprites/player.jpg")
loadSprite('boss', "sprites/boss.png")

scene("battle", ({ level, score }) => {

const player = add([
    sprite('player'), solid(),
    pos(30, 0),
    body(),
    big(),
    origin('bot')
  ])

})

start("battle", { level: 0, score: 0})