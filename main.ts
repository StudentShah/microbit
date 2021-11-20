basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . #
        # . # . #
        . # . # .
        `)
})
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 500)
    music.playMelody("C5 B A G F E D C ", 500)
})
