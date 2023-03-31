namespace SpriteKind {
    export const j1 = SpriteKind.create()
    export const j2 = SpriteKind.create()
    export const j3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.j3, function (sprite, otherSprite) {
    if (sprite == proj1) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
    if (sprite == proj2) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.j2, function (sprite, otherSprite) {
    if (sprite == proj1) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
    if (sprite == proj3) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.j1, function (sprite, otherSprite) {
    if (sprite == proj3) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
    }
    if (sprite == proj2) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    }
})
let proj3: Sprite = null
let proj2: Sprite = null
let proj1: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 c 5 c c c c b . 
    b d d d b b b 5 5 c c c c c c c 
    c d d b 5 5 d c 5 5 5 c 5 5 b . 
    c b b d 5 d c d 5 5 5 c 5 5 b . 
    . b 5 5 b c d d 5 5 5 c 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.j1))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    7 7 7 7 7 7 2 2 b b f f d f 
    . . 7 7 7 7 d d d b b d b f 
    7 7 7 7 7 7 d b d d f f f . 
    . f d 7 f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.j2))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 a a a a 7 7 7 c c 7 7 c . 
    a a a a a a a a 7 f c 6 7 7 7 c 
    f 1 1 a 1 a 7 6 f c c 6 6 6 c c 
    f 1 a 1 1 a 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.j3))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.setPlayerIndicatorsVisible(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`niveau1`)
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        proj1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
        pause(100)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        proj2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -100, 0)
        pause(100)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        proj3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), -100, 0)
        pause(100)
    }
})
