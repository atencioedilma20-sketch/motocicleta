radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 2) {
        basic.showString("hola")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
