let Schild = ""
input.onButtonPressed(Button.A, function () {
    Schild = "Open"
})
input.onButtonPressed(Button.B, function () {
    Schild = "Close"
})
basic.forever(function () {
    basic.showString(Schild)
})
basic.forever(function () {
    basic.showString("open")
})
